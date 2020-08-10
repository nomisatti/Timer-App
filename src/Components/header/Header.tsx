import React from 'react';
import logoImage from '../../images/timerLogo.png'

function Header() {
  return (
    <div className="headerSection" >
    
      <span>  <img src={logoImage} alt="Timer Quiz" className='timerlogo'/> <strong className="LogoText">Timer App</strong></span>

    </div>
  );
}

export default Header;
