import './Chatbot.css';
import { useRef, useState, useEffect } from 'react';
import { ChatbotContent } from './ChatbotContent';
import { chatbot } from 'supersimpledev'
import { additionalResponses } from './additionalResponses.js'

export const Chatbot = () => {
  const chatWindowRef = useRef(null);
  const [isOpenTab, setIsOpenTab] = useState(false);

  function toggleTab() {
    setIsOpenTab(prev => !prev);
  }

  useEffect(() => {
    chatbot.addResponses(additionalResponses)
  }, []);

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
