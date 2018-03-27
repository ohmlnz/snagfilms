import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><a href="/"><img src='https://appcmsprod.viewlift.com/00000149-86ec-d4f3-a7e9-e6fe760d0000/images/snag-logo-white-color-no-tagline.png' alt="logo"/></a></li>
        <li><Link to='/'>Home</Link></li>
        <li><a href='#'>Movies</a></li>
        <li><a href='#'>Shows</a></li>
      </ul>
    </nav>
  </header>
)

export default Header;
