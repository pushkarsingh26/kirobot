import React from 'react';
import styled from 'styled-components';

const ToggleButton = styled.button`
  background: ${({ theme }) => theme.secondary};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.text};
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

const ToggleWrapper = styled.div`
  position: relative;
  display: inline-block;
  &:hover ${Tooltip} {
    visibility: visible;
    opacity: 1;
  }
`;

const ThemeToggle = ({ theme, toggleTheme }) => (
  <ToggleWrapper>
    <ToggleButton onClick={toggleTheme} aria-label="Toggle theme">
      {theme === 'light' ? '🌙' : '☀️'}
    </ToggleButton>
    <Tooltip>{theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}</Tooltip>
  </ToggleWrapper>
);

export default ThemeToggle; 