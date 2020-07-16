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
          <a href="https://www.eslgaming.com/category/counter-strike"
          target='_blank'
          rel='noopener noreferrer'>#Counter-Strike</a>
          <a href="https://www.eslgaming.com/category/intel-extreme-masters"
             target='_blank'
             rel='noopener noreferrer'>#Intel Extreme Masters</a>
          <a href="https://www.eslgaming.com/category/esl-one"
             target='_blank'
             rel='noopener noreferrer'>#ESL One</a>
          <a href="https://www.eslgaming.com/category/esl-pro-league-0"
             target='_blank'
             rel='noopener noreferrer'>#ESL Pro League</a>
          <a href="https://www.eslgaming.com/category/dota-2"
             target='_blank'
             rel='noopener noreferrer'>#Dota 2</a>
        </div>
        <div className='socials'>
          <a href="https://www.facebook.com/ESL"
             target='_blank'
             rel='noopener noreferrer'>
            <Icon.Facebook size={20}/>
          </a>
          <a href="https://twitter.com/ESL"
             target='_blank'
             rel='noopener noreferrer'>
            <Icon.Twitter size={20}/>
          </a>
          <a href="https://www.instagram.com/eslgaming/"
             target='_blank'
             rel='noopener noreferrer'>
            <Icon.Instagram size={20}/>
          </a>
          <a href="https://www.twitch.tv/team/esl/"
             target='_blank'
             rel='noopener noreferrer'>
            <Icon.Twitch size={20}/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;