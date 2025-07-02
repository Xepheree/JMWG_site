import './Chatbot.css';
import { useRef, useState, useEffect } from 'react';

export const Chatbot = () => {
  const chatWindowRef = useRef(null);
  const [isOpenTab, setIsOpenTab] = useState(false);

  function toggleTab() {
    const newState = !isOpenTab;
    setIsOpenTab(newState);

    if (chatWindowRef.current) {
      chatWindowRef.current.style.opacity = newState ? '1' : '0';
    }
  }

  useEffect(() => {
    // Optional: set initial opacity
    if (chatWindowRef.current) {
      chatWindowRef.current.style.opacity = '0';
    }
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
        className="chat-window"
        ref={chatWindowRef}
      >
        Test
      </div>
    </>
  );
};
