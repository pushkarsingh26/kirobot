import React from 'react';
import styled from 'styled-components';
import CodeBlock from './CodeBlock';
import star from '../assets/kiro-logo.png';

const BubbleRow = styled.div`
  display: flex;
  flex-direction: ${({ sender }) => (sender === 'user' ? 'row-reverse' : 'row')};
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${({ sender, theme }) => (sender === 'user' ? theme.accent : theme.primary)};
  color: #fff;
  border-radius: 50%;
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 12px;
`;

const Bubble = styled.div`
  background: ${({ sender }) =>
    sender === 'user'
      ? 'linear-gradient(135deg, #6e8efb, #a777e3)'
      : 'linear-gradient(135deg, #f6d365, #fda085)'};
  color: #fff;
  padding: 1rem 1.4rem;
  border-radius: 20px;
  max-width: 65%;
  font-size: 1rem;
  position: relative;
  word-break: break-word;
  white-space: pre-line;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;

const NameTag = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
  color: #999;
  margin: ${({ sender }) => (sender === 'user' ? '0 12px 4px auto' : '0 auto 4px 12px')};
`;

const MessageBubble = ({ sender, text, code }) => (
  <>
    <NameTag sender={sender}>{sender === 'user' ? 'You' : 'KiroBOT'}</NameTag>
    <BubbleRow sender={sender}>
      <Avatar sender={sender}>{sender === 'user' ? '🧑' : '🤖'}</Avatar>
      <Bubble sender={sender}>
        {text}
        {code && <CodeBlock code={code} />}
      </Bubble>
    </BubbleRow>
  </>
);

export default MessageBubble;
