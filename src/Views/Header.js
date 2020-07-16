import React from 'react';
import * as Icon from 'react-feather'
import BlackBar from "../Components/BlackBar/BlackBar";
import './Header.scss'

const Header = () => {
  const logoURL = 'https://www.eslgaming.com/sites/all/themes/stability/stability_sub/logo.png'

  return (
    <div className='header'>
      <BlackBar/>
      <div className='logo-container'>
        <img className='logo' src={logoURL} alt="ESL Logo"/>
      </div>
      <div className='popular-topics'>
        <span>Popular Topics:</span>
        <div className='popular-topics-links'>
          <a href="#">#Counter-Strike</a>
          <a href="#">#Intel Extreme Masters</a>
          <a href="#">#ESL One</a>
          <a href="#">#ESL Pro League</a>
          <a href="#">#Dota 2</a>
        </div>
        <div className='socials'>
          <Icon.Facebook/>
          <Icon.Twitter/>
          <Icon.Instagram/>
          <Icon.Twitch/>
          <Icon.Music/>
        </div>
      </div>
    </div>
  );
};

export default Header;