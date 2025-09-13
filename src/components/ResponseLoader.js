import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Loader = styled.div`
  border: 4px solid ${({ theme }) => theme.secondary};
  border-top: 4px solid ${({ theme }) => theme.primary};
  border-radius: 50%;
  width: 32px;
  height: 32px;
  animation: ${spin} 1s linear infinite;
  margin: 1.5rem auto;
`;

const ResponseLoader = () => <Loader aria-label="Loading..." />;

export default ResponseLoader; 