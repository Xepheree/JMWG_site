import './Footer.css'

export const Footer = () => {
  return (

    <div className='footer'>

      <div className="left-section-footer">
        <p>Please report any bugs.</p>
        <p>patrickperez0530@gmail.com</p>
      </div>



      <div className="right-section-footer">
        <p>Connect to our socials!</p>
        <div className="social-media-links">
          <a href="https://www.facebook.com/" target='_blank'>
            <img src="facebook-icon.png"
              className='social-icon'
            />
          </a>
          <a href="https://x.com/?lang=en" target='_blank'>
            <img src="x-icon.png"
              className='social-icon'
            />
          </a>
          <a href="https://www.youtube.com/" target='_blank'>
            <img src="youtube-icon.png"
              className='social-icon'
            />
          </a>
        </div>
      </div>

    </div>

  );
}