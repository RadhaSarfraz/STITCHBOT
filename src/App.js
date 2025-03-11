// import logo from './logo.svg';
import bot_icon from './bot_icon.png';
import 'react-chatbot-kit/build/main.css';
import Chatbot from 'react-chatbot-kit';
import config from './configs/chatbotConfig';
import MessageParser from './chatbot/MessageParser';
import ActionProvider from './chatbot/ActionProvider';
import { useState } from 'react';
import './App.css';

function App() {
  const [showBot, toggleBot] = useState(false);

  const saveMessages = (messages, HTMLString) => {
    localStorage.setItem('chat_messages', JSON.stringify(messages));
  };

  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem('chat_messages'));
    return messages;
  };

  return (
    <div className='App' style={{
      all: "revert",
      position: "fixed",
      bottom: "40px",
      right: "20px",
      zIndex: "9999"
    }} >
      {showBot && (
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageHistory={loadMessages()}
          messageParser={MessageParser}
          saveMessages={saveMessages}
        />
      )}
      <button onClick={() => toggleBot((prev) => !prev)} style={{
        "backgroundColor": "transparent",
        border: "none",
        cursor: "PointerEvent",
        overflow: "hidden",
        outline: "none",
        position: "fixed",
        right: "40px",
        bottom: "20px",

      }}>
        <img src={bot_icon} width="30" alt="folder" />
      </button>
    </div>
  );
}

export default App;