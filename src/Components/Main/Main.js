import './Main.css';

import CurriculumList from './Curriculum/CurriculumList';
import {
  curriculumInfosFr,
  curriculumInfosEn,
} from './Curriculum/helpers/curriculumInfos';

const Main = (props) => {
  const language = props.language;
  const smallScreen = props.smallScreen;
  const curriculumInfos =
    language === 'Français' ? curriculumInfosFr : curriculumInfosEn;

  return (
    <div className={`main-container ${smallScreen ? 'small-screen-size' : ''}`}>
      <div className="main-top-div"></div>
      <div className="main-text-container">
        <div className="main-text">
          <CurriculumList curriculum={curriculumInfos.experiences} />
          <CurriculumList curriculum={curriculumInfos.formations} />
          <CurriculumList curriculum={curriculumInfos.projects} />
        </div>
      </div>
    </div>
  );
};

export default Main;
