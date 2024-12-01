import './Header.css';
import { headerInfosFr, headerInfosEn } from './helpers/headerInfos';

const Header = (props) => {
  return (
    <div className="header-text">
      <h1>Benjamin ACHOUCHE</h1>
      <h2>{`<${props.language === 'fr' ? headerInfosFr : headerInfosEn}/>`}</h2>
    </div>
  );
};
export default Header;
