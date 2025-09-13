import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { Send } from 'lucide-react';

const InputWrapper = styled.form`
  flex: 1;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.input};
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.03);
  margin-right: 1rem;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  padding: 0.9rem 1rem;
  font-size: 1.05rem;
  color: ${({ theme }) => theme.text};
  outline: none;
`;

const IconButton = styled.button`
  background: ${({ theme }) => theme.primary};
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: ${({ theme }) => theme.accent};
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const InputField = forwardRef(({ value, setValue, onSend, disabled }, ref) => {
  const handleChange = e => setValue(e.target.value);
  const handleSend = e => {
    e.preventDefault();
    if (value.trim() && !disabled) {
      onSend(value);
    }
  };

  return (
    <InputWrapper onSubmit={handleSend}>
      <Input
        ref={ref}
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Type your message... (Enter to send)"
        aria-label="Type your message"
        disabled={disabled}
      />
      <IconButton type="submit" disabled={disabled}>
        <Send size={20} />
      </IconButton>
    </InputWrapper>
  );
});

export default InputField;
