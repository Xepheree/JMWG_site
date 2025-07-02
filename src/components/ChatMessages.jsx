import { ChatMessage } from "./ChatMessage";
import { useEffect, useRef } from "react";
import './ChatMessages.css'

export const ChatMessages = ({ chatMessages }) => {
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    const refElem = chatMessagesRef.current;
    if (refElem) {
      refElem.scrollTop = refElem.scrollHeight;
    }
  }, [chatMessages.length]); // important: depend on length or new message

  return (
    <div className="chat-messages" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => (
        <ChatMessage
          key={chatMessage.key}
          message={chatMessage.message}
          sender={chatMessage.sender}
          time={chatMessage.time}
        />
      ))}
    </div>
  );
};
