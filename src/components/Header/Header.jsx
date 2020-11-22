import React from 'react';

import s from './Header.module.css';

const Header = () => {
  return (
    <div className={s.container}>
      <div>
        <a href='#top' className={s.logo}>
          <span style={{ color: '#009108' }}>Mutant </span>
          <span style={{ color: '#fff' }}>She</span>
          <span style={{ color: '#bc0000' }}>ep</span>
        </a>
      </div>
      <div className={s.nav}>
        <a href='#about'>About Us</a>
        <a href='#projects'>Projects</a>
        <a href='#contacts'>Contacts</a>
      </div>
    </div>
  );
};

export default Header;
