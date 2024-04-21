import React from 'react';
import './Header.css';
import logoImage from '../logo/logobanka.png';

const header = document.createElement('div');
header.classList.add('Header');

const headerTop = document.createElement('div');
headerTop.classList.add('header-top');
header.appendChild(headerTop);

const info = document.createElement('div');
info.classList.add('info');
headerTop.appendChild(info);

const link = document.createElement('p');
link.classList.add('link');
link.textContent = 'БАНКУЛЯТОР';
info.appendChild(link);

document.body.prepend(header);

function Header() {
  return (
    <div className="Header">
      <img src={logoImage} alt="BankLogo" className="logo"/>
      <div className="info">
        <p className="link">БАНКУЛЯТОР</p>
        </div>
    </div>
  );
}

export default Header;
