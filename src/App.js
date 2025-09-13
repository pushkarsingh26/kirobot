

import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import { lightTheme, darkTheme } from './styles/theme';
import myVideo from './assets/intro.mp4';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: 'Inter', 'Roboto', Arial, sans-serif;
    margin: 0;
    padding: 0;
    transition: background 0.3s, color 0.3s;
  }
`;

const AppLayout = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background: ${({ theme }) => theme.background};
`;

function App() {

  const [videoPlay , setVideoPlay] = useState(true)


   

  const handleVideoEnd = () => {
    setShowIntro(false);  // Jab video khatam ho jaye, chatbot dikhe
  };



  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');


  useEffect(()=>{

    setTimeout(()=>{
      setVideoPlay(false)
    },5000)

  },[])



  if(videoPlay){
    return (
      <video width={"100%"} height="100%" muted autoPlay>
            <source src={myVideo} type='video/mp4' />
            
                 </video>
    )
  }


  return (
    <>

    <div className="h-screen w-screen overflow-hidden">
      {videoPlay ? (
        <div className="h-full w-full flex items-center justify-center bg-black">
          <video
            src={myVideo}
            autoPlay
            muted
            onEnded={handleVideoEnd}
            className="h-full w-full object-cover"
          />
          <button
            onClick={() => setVideoPlay(false)}
            className="absolute top-5 right-5 text-black bg-white-700 bg-opacity-60 px-4 py-2 rounded"
          >
            Skip
          </button>
          
        </div>
      ) : (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <AppLayout>
        
        <Sidebar theme={theme} toggleTheme={toggleTheme} />
        <ChatWindow />
      </AppLayout>
    </ThemeProvider>
      )}
    </div>

    
  </>
  );
}

export default App;
