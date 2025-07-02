import { useState, useEffect } from "react";
import { ChatMessages } from "./ChatMessages";
import { ChatInput } from "./ChatInput";
import dayjs from "dayjs";

export const ChatbotContent = () => {
  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) || [
    {
      message: 'Hello from Patrick',
      sender: 'user',
      key: crypto.randomUUID(),
      time: dayjs().valueOf()
    },

    {
      message: 'Hello from Patrick',
      sender: 'chatbot',
      key: crypto.randomUUID(),
      time: dayjs().valueOf()
    },

    {
      message: 'Hello from Patrick',
      sender: 'user',
      key: crypto.randomUUID(),
      time: dayjs().valueOf()
    },

    {
      message: 'Hello from Patrick',
      sender: 'chatbot',
      key: crypto.randomUUID(),
      time: dayjs().valueOf()
    }

  ]);

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(chatMessages));
  }, [chatMessages]);

  return (
    <div className="chatbot-content">

      <ChatMessages chatMessages={chatMessages} />
      <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages} />


    </div>
  );
}