import React, { useState } from 'react';
import styled from 'styled-components';

const Panel = styled.div`
  background: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.text};
  padding: 0.7rem 1.2rem;
  border-radius: 8px;
  margin: 1rem 0 0.5rem 0;
  font-size: 0.98rem;
  cursor: pointer;
  user-select: none;
`;

const History = styled.div`
  margin-top: 0.5rem;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.text};
`;

const ContextMemory = () => {
  const [open, setOpen] = useState(false);
  return (
    <Panel onClick={() => setOpen(!open)}>
      {open ? 'Hide' : 'Show'} Context Memory
      {open && (
        <History>
          {/* Placeholder for chat memory */}
          <div>User: Hi KiroBot!</div>
          <div>Bot: Hello! How can I help you today?</div>
        </History>
      )}
    </Panel>
  );
};

export default ContextMemory; 