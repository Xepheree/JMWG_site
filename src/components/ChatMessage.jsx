import RobotProfilePic from '../assets/robot.png'
import UserProfilePic from '../assets/profile-1.jpg'
import './ChatMessage.css'
import dayjs from 'dayjs'

export const ChatMessage = ({ message, sender, time }) => {


  return (
    <div className={
      sender === 'user'
        ? 'chat-message sender-user'
        : 'chat-message sender-chatbot'
    }>

      {sender === 'chatbot'
        && (<img src={RobotProfilePic}
          className="chatbot-picture"
        />
        )}

      <span className={
        sender === 'user'
          ? 'message message-user'
          : 'message'}>
        {message}
        <div className='message-time'>{dayjs(time).format('h:mm A')}</div>
      </span>

      {sender === 'user' && (
        <img src={UserProfilePic}
          className="user-picture"
        />
      )}


    </div>
  );
}