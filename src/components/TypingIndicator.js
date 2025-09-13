import React from 'react';
import styled, { keyframes } from 'styled-components';

const typing = keyframes`
  0% { opacity: 0.2; transform: scale(1); }
  20% { opacity: 1; transform: scale(1.2); }
  100% { opacity: 0.2; transform: scale(1); }
`;

const Indicator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.primary};
  margin: 0.8rem 0 0 48px;
  font-style: italic;
`;

const Dot = styled.span`
  width: 8px;
  height: 8px;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 50%;
  animation: ${typing} 1.4s infinite ease-in-out;
  animation-delay: ${({ delay }) => delay};
`;

const TypingIndicator = () => (
  <Indicator>
    KiroBot is typing
    <Dot delay="0s" />
    <Dot delay="0.2s" />
    <Dot delay="0.4s" />
  </Indicator>
);

export default TypingIndicator;
