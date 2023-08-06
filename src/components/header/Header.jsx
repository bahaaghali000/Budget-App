import React, { useEffect, useRef } from 'react';
import './Header.css';

import logo from '../../assets/images/logo.png';
import Button from '../UI/button/Button';
import { useState } from 'react';

import Pop from '../UI/pop/Pop';

const Header = () => {
  const [showModel, setShowModel] = useState(false);

  const headerRef = useRef();

  useEffect(() => {
    if (document.documentElement.scrollTop > 40) {
      headerRef.current.classList.add('scrolled');
    }

    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > 40) {
        headerRef.current?.classList.add('scrolled');
      } else {
        headerRef.current?.classList.remove('scrolled');
      }
    });
  });

  return (
    <header ref={headerRef}>
      {showModel && <Pop hidden={() => setShowModel(!showModel)} />}
      <div className="container">
        <div className="header_row">
          {/* Logo */}
          <div className="header_brand">
            <div className="logo">
              <img src={logo} alt="brand logo" />
            </div>
            <h1>Budget App</h1>
          </div>

          {/* Action */}
          <div className="header_actions">
            <div
              className="header_actions-add"
              onClick={() => setShowModel(!showModel)}
            >
              <Button>+</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
