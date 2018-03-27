import React from 'react';
import links from '../data/links.json';
import '../styles/Footer.css';

const Footer = () => (
  <footer>
    <nav className='footer'>
      <ul className='links'>
        {links.map((el, i) => (
          <li><a href={el.link}>{el.name}</a></li>
        ))}
      </ul>
    </nav>
  </footer>
)

export default Footer;
