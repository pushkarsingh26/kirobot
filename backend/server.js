const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// 🧠 In-memory chat history
let chatHistory = [];

app.post('/chat', async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: 'No message provided' });

  // 🧠 Add user message to history
  chatHistory.push({ role: 'user', content: message });

  // 👇 Check if it's a "what's your name" type question
  const lowerMessage = message.toLowerCase();
  if (
    lowerMessage.includes("your name") ||
    lowerMessage.includes("who are you") ||
    lowerMessage.includes("what are you")
  ) {
    const botReply = "Hello I am KiroBOT, your BFF 💖";
    chatHistory.push({ role: 'assistant', content: botReply });
    return res.json({ reply: botReply });
  }

  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'openai/gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are KiroBot, an AI chat assistant. Respond helpfully and format code with markdown if needed.' },
          ...chatHistory
        ],
        max_tokens: 512,
        temperature: 0.7
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'http://localhost:3000',
          'X-Title': 'kirobot-hackathon'
        }
      }
    );

    const botReply = response.data.choices[0].message.content;
    chatHistory.push({ role: 'assistant', content: botReply });
    res.json({ reply: botReply });

  } catch (err) {
    console.error("OpenRouter API Error:", err?.response?.data || err.message);
    res.status(500).json({ error: 'OpenRouter API error' });
  }
});

app.post('/reset', (req, res) => {
  chatHistory = [];
  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`✅ KiroBot backend running on http://localhost:${port}`);
});
