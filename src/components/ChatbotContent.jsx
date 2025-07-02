import { useState, useEffect } from "react";
import { ChatMessages } from "./ChatMessages";
import { ChatInput } from "./ChatInput";
import './ChatbotContent.css'

export const ChatbotContent = () => {
  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) || []);

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(chatMessages));
  }, [chatMessages]);

  return (
    <>
      <div className="welcome-message" style={{ display: chatMessages.length === 0 ? '' : 'none' }}>
        <p>Welcome to Chat Assistant!</p>

        <p>Please type your messages below.</p>

      </div>

      <ChatMessages chatMessages={chatMessages} />
      <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages} />
    </>
  );
}