import React from 'react';
import { Link } from 'react-router-dom';

import './style.css'


function Footer(props) {
  return (
    <>
      <div className='footerLink'>
        <p className='footer__text'>© 2023</p>
      </div>

      <div className="footerLink__socials">
        <Link to="https://uk-ua.facebook.com/"  target="_blank" className='footerLink__social' >
          <img src="./facebook.svg" width="30" height="30" alt="facebook" />
        </Link>
        <Link to="https://www.instagram.com/" target="_blank" className='footerLink__social' >
          <img src="./instagram.svg" width="30" height="30" alt="instagram" />
        </Link>
        <Link to="https://twitter.com/" target="_blank" className='footerLink__social' >
          <img src="./twitter.svg" width="30" height="30" alt="twitter" />
        </Link>
      </div>

      <div className="aboutMe">
        <Link
          to="https://github.com/"
          target="_blank"
          className="footer-link-git">
          <p className="footer-link-text">Project link</p>
          <img src="./git.svg" width="30" height="30" alt="GitHub" />
        </Link>
      </div>
    </>
  );
}

export default Footer;