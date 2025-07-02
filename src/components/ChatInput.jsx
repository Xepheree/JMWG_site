import { useState } from "react";
import dayjs from "dayjs";
import LoadingSpinner from '../assets/loading-spinner.gif'
import { Chatbot } from "supersimpledev";
export const ChatInput = ({ chatMessages, setChatMessages }) => {

  const [inputText, setInputText] = useState('');

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        key: crypto.randomUUID(),
        time: dayjs().valueOf()
      }
    ];

    setInputText('');

    setChatMessages(newChatMessages);

    const loadingSpinner = <img src={LoadingSpinner} className="loading-spinner" />

    setChatMessages([
      ...newChatMessages,
      {
        message: loadingSpinner,
        sender: 'chatbot',
        key: crypto.randomUUID()
      }
    ]);

    const response = await Chatbot.getResponseAsync(inputText);

    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: 'chatbot',
        key: crypto.randomUUID(),
        time: dayjs().valueOf()
      }
    ]);
  }

  return (
    <>
      <input
        type="text"
        placeholder='Send a message to Chatbot'
        className='message-box'
        value={inputText}
        onChange={saveInputText}
      />
      <button
        className='send-button'
        onClick={sendMessage}
      >Send
      </button>
    </>
  );
}