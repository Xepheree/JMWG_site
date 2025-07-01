import './Welcome_section.css'

export const Welcome_section = () => {
  return (
    <div className='main-wrapper'>

      <div className='text-wrapper'>


        <div className='welcome-text'>
          <p className='title'>
            The Grace of God abounds!
          </p>

          <p className='description'>
            Worship the Lord with all your heart, body, soul and mind.
          </p>
        </div>
      </div>

      <div className="image-wrapper">
        <div className="welcome-image-wrapper">
          <img
            src="worship.png"
            className="welcome-img"
          />
        </div>
      </div>

    </div>
  );
}