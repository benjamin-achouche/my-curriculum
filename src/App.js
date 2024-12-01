import React, { useState } from 'react';
import './App.css';

import ProfilePicture from './Components/ProfilePicture/ProfilePicture.js';
import Header from './Components/Header/Header.js';
import Aside from './Components/Aside/Aside.js';
import Main from './Components/Main/Main.js';

const App = () => {
  const [language, setLanguage] = useState('Français');
  const [smallScreen, setSmallScreen] = useState(false);

  const languageSwitchHandler = () => {
    language === 'Français' ? setLanguage('English') : setLanguage('Français');
  };

  const smallScreenModalHandler = () => {
    setSmallScreen(!smallScreen);
  };

  return (
    <React.Fragment>
      <ProfilePicture />
      <header>
        <div className="burger-button" onClick={smallScreenModalHandler}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <Header language={language} />
        <div className="button-container">
          <button className="language-button" onClick={languageSwitchHandler}>
            {language === 'Français' ? 'English' : 'Français'}
          </button>
        </div>
      </header>
      <div className="main-aside-container">
        <Aside language={language} smallScreen={smallScreen} />
        <Main language={language} smallScreen={smallScreen} />
      </div>
    </React.Fragment>
  );
};

export default App;
