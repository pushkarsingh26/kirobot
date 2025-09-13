import React from 'react';
import styled from 'styled-components';
import { RotateCcw } from 'lucide-react';

const Button = styled.button`
  background: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.text};
  border: none;
  border-radius: 6px;
  padding: 0.6rem 0.75rem;
  font-size: 1rem;
  margin-left: 0.5rem;
  cursor: pointer;
  transition: background 0.2s;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({ theme }) => theme.accent};
    color: #fff;
  }
`;

const Tooltip = styled.span`
  visibility: hidden;
  background: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.background};
  text-align: center;
  border-radius: 6px;
  padding: 4px 8px;
  position: absolute;
  z-index: 1;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.2s;
  font-size: 0.85rem;
  pointer-events: none;
`;

const Wrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${Tooltip} {
    visibility: visible;
    opacity: 1;
  }
`;

const ResetChatButton = ({ onReset }) => (
  <Wrapper>
    <Button aria-label="Reset chat" onClick={onReset}>
      <RotateCcw size={18} />
    </Button>
    <Tooltip>Reset chat (Ctrl+K)</Tooltip>
  </Wrapper>
);

export default ResetChatButton;
