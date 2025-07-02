import './Chatbot.css';
import { useRef, useState } from 'react';
import { ChatbotContent } from './ChatbotContent';

export const Chatbot = () => {
  const chatWindowRef = useRef(null);
  const [isOpenTab, setIsOpenTab] = useState(false);

  function toggleTab() {
    setIsOpenTab(prev => !prev);
  }

  return (
    <>
      <button
        className="chatbot-button"
        onClick={toggleTab}
      >
        <img src="chat-icon.png" alt="" />
      </button>

      <div
        className={`chat-window ${isOpenTab ? 'open' : ''}`}
        ref={chatWindowRef}
      >
        <ChatbotContent />


      </div>
    </>
  );
};
