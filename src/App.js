import React, { useState } from 'react';
import './App.css';

import ProfilePicture from './Components/ProfilePicture/ProfilePicture.js';
import Header from './Components/Header/Header.js';
import Aside from './Components/Aside/Aside.js';
import Main from './Components/Main/Main.js';

const App = () => {
  const [language, setLanguage] = useState('fr');
  const [smallScreen, setSmallScreen] = useState(false);

  const languageSwitchHandler = () => {
    language === 'fr' ? setLanguage('en') : setLanguage('fr');
  };

  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/benjamin-picture.jpeg';
    link.download = 'benjamin-picture.jpeg';
    link.click();
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
          <button className="action-button" onClick={languageSwitchHandler}>
            {language === 'fr' ? 'English' : 'Français'}
          </button>

          {/* <button
            className="action-button download-button"
            onClick={downloadPDF}
          >
            <img src="/download-icon.svg" alt="Icon" width={24} height={24} />
          </button> */}
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
