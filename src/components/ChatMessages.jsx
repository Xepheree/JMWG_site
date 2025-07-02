import { ChatMessage } from "./ChatMessage";

export const ChatMessages = ({ chatMessages }) => {
  return (
    <>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.key}
            time={chatMessage.time}
          />
        );
      })
      }
    </>
  );
}