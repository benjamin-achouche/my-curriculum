import React from 'react';
import './Aside.css';

import PersonalInfos from './PersonalInfos/PersonalInfos';
import { asideInfosFr, asideInfosEn } from './helpers/asideInfos';

const Aside = (props) => {
  const language = props.language;
  const smallScreen = props.smallScreen;

  const asideInfos = language === 'Français' ? asideInfosFr : asideInfosEn;

  return (
    <div
      className={`aside-container ${smallScreen ? 'small-screen-modal' : ''}`}
    >
      <div className="aside-top-div"></div>
      <div className="aside-text-container">
        <div className="aside-text">
          <article>
            <h3>CONTACT</h3>
            <p className="aside-hide-text">
              13 rue de Bourgogne{<br />}57160 Moulins-lès-Metz
            </p>
            <p className="aside-hide-text email">benjaminachouche</p>
            <p className="aside-hide-text">(33) 6 58 91 50 15</p>
          </article>
          <PersonalInfos
            persoInfosKey="aboutKey"
            type="nolist"
            title={language === 'Français' ? 'A PROPOS' : 'ABOUT ME'}
            text={asideInfos.about}
          />
          <PersonalInfos
            persoInfosKey="skillsKey"
            component={true}
            smallScreen={smallScreen}
            text={asideInfos.skillsText}
            type="componentList"
            title={
              language === 'Français'
                ? 'COMPETENCES TECHNIQUES'
                : 'TECHNICAL SKILLS'
            }
            subComponentType={['list', 'list', 'list']}
            subComponentTitle={asideInfos.skillsListItems}
            subComponentListItems={[
              asideInfos.frontend,
              asideInfos.backend,
              asideInfos.others,
            ]}
          />
          <PersonalInfos
            persoInfosKey="languageKey"
            type="list"
            title={language === 'Français' ? 'LANGUES' : 'LANGUAGES'}
            listItems={asideInfos.language}
            bonusText="(TOEIC : 950/990)"
          />
          <PersonalInfos
            persoInfosKey="interestsKey"
            type="list"
            title={language === 'Français' ? "CENTRES D'INTERET" : 'HOBBIES'}
            listItems={asideInfos.interests}
            bonusText={[
              '',
              language === 'Français' ? '(17 ans)' : '(17 years)',
              '(Sonic Hacking Contest 2018 - 2nd Place)',
              '(Maya, Blender, 3DS MAX)',
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Aside;
