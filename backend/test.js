require('dotenv').config();
const axios = require('axios');

(async () => {
  try {
    const res = await axios.post('https://openrouter.ai/api/v1/chat/completions', {
      model: 'openai/gpt-3.5-turbo',
      messages: [{ role: 'user', content: 'Hello' }],
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
      }
    });

    console.log(res.data.choices[0].message.content);
  } catch (err) {
    console.error(err?.response?.data || err.message);
  }
})();
