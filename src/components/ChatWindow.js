import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import MessageBubble from './MessageBubble';
import InputField from './InputField';
import TypingIndicator from './TypingIndicator';
import ResetChatButton from './ResetChatButton';
import Toast from './Toast';
    import backgroundImage from '../assets/kiro-back.png';

const ChatWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: #0d1117;
  display: flex;
  flex-direction: column;
  box-shadow:rgba(0,0,0,0.35) 0px 5px 15px;
  margin:5px;
   border-radius : 25px;
   border : 5px solid white;

`;
     const myStyles = {
     
      backgroundImage: `url(${backgroundImage})`, // Use the imported image variable
      backgroundSize: 'cover', // Optional: Adjust as needed
      backgroundPosition: 'center', // Optional: Adjust as needed
      height: '100vh', // Example: Set height for visibility
      width: '100%',
      
      
       // Example: Set width
    };
const ChatBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #040223ff;
  
  overflow: hidden;
  
 border-radius : 25px;
`;
const Messages = styled.div`

  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BottomBar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-top: 1px solid #30363d;
  background: #161b22;
`;

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const sendMessage = async (text) => {
    if (!text.trim()) return;
    setMessages((msgs) => [...msgs, { sender: 'user', text }]);
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/chat', {
        message: text
      });

      const reply = response.data?.reply;
      if (reply) {
        setMessages((msgs) => [...msgs, { sender: 'bot', text: reply }]);
      } else {
        setError('Invalid response from OpenRouter.');
      }
    } catch (err) {
      console.error('API error:', err);
      setError('Something went wrong while contacting OpenRouter.');
    } finally {
      setLoading(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const handleInputSend = (text) => {
    setInput('');
    sendMessage(text);
  };

  const handleReset = async () => {
    await axios.post('http://localhost:5000/reset');
    setMessages([]);
    setInput('');
    inputRef.current?.focus();
  };

  return (
    <ChatWrapper>
      <ChatBox>
        <Messages style={myStyles}>
          
          {messages.map((msg, i) => (
            <MessageBubble key={i} sender={msg.sender} text={msg.text} />
          ))}
          {loading && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </Messages>
        <BottomBar>
          <InputField
            value={input}
            setValue={setInput}
            onSend={handleInputSend}
            disabled={loading}
            ref={inputRef}
          />
          <ResetChatButton onReset={handleReset} />
        </BottomBar>
        <Toast message={error} onClose={() => setError('')} />
      </ChatBox>
    </ChatWrapper>
  );
};

export default ChatWindow;
