import React, { useState } from 'react';
import styled from 'styled-components';

const CodeContainer = styled.div`
  position: relative;
  margin-top: 0.7rem;
`;

const Pre = styled.pre`
  background: ${({ theme }) => theme.codeBg};
  color: ${({ theme }) => theme.codeText};
  border-radius: 8px;
  padding: 1rem;
  font-size: 0.98rem;
  overflow-x: auto;
  margin: 0;
`;

const CopyButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: ${({ theme }) => theme.accent};
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 2px 8px;
  font-size: 0.9rem;
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };
  return (
    <CodeContainer>
      <Pre>
        <code>{code}</code>
      </Pre>
      <CopyButton onClick={handleCopy}>{copied ? 'Copied!' : 'Copy'}</CopyButton>
    </CodeContainer>
  );
};

export default CodeBlock; 