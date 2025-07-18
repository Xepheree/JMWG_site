import { useState } from 'react';
import { HamburgerMenu } from './HamburgerMenu';
import './Header.css';

export const Header = () => {
  const [windowOpen, setWindowOpen] = useState(false);

  return (
    <div className='main-header'>

      <div className="left-section">
        <img src="LONG.png" alt="" className="header-logo" />
      </div>

      <div className="right-section">
        <ul
          className={`nav-links ${windowOpen ? 'open' : ''}`}
        >
          <li className='nav-link'>
            <a className='link' href="#">Life Group</a>
          </li>

          <li className='nav-link'>
            <a className='link' href="#">Faith Wall</a>
          </li>

          <li className='nav-link'>
            <a className='link' href="#">My Devotions</a>
          </li>

          <li className='nav-link'>
            <a className='link' href="#">Login</a>
          </li>
        </ul>

        <HamburgerMenu setWindowOpen={setWindowOpen} windowOpen={windowOpen} />

      </div>

    </div>
  );
}