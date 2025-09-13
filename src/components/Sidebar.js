import React from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';
import star from '../assets/kiro-logo.png';

import ThemeToggle from './ThemeToggle';

const SidebarContainer = styled.div`
  width: 260px;
  background: ${({ theme }) => theme.sidebar};
  border-right: 1px solid ${({ theme }) => theme.border};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem 1rem 1rem;
  box-sizing: border-box;
`;

// const myStyles = {
     
//      
//     };

const Logo = styled.img`
  width: 300px;
  height: 200px;
  margin-bottom: 1rem;
`;

const Tagline = styled.div`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.accent};
  font-weight: 600;
  margin-bottom: 2rem;
`;
const Tagline2 = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.accent};
  font-weight: 400;
  margin-bottom: 2rem;
  margin-top: 20px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  margin-bottom: auto;
`;

const NavItem = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  text-align: left;
  padding: 0.5rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: ${({ theme }) => theme.secondary};
  }
`;

const SidebarFooter = styled.div`
  margin-top: 2rem;
`;

const Sidebar = ({ theme, toggleTheme }) => (
  <SidebarContainer>
    <Logo src={star} alt="KiroBot Logo" />
    <Tagline>Your AI Chat Companion
    Chat Smarter Not Harder..</Tagline>
    <Nav>
      <NavItem>Chat</NavItem>
      <NavItem>Code</NavItem>
      <NavItem>Writing</NavItem>
    </Nav>
    <SidebarFooter>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </SidebarFooter>
    <Tagline2 className='text-sm'>
      &copy; 2025 KiroBot
    </Tagline2>
  </SidebarContainer>
);

export default Sidebar; 