import benjaminPicture from './benjamin-picture.jpeg';
import './ProfilePicture.css';

const ProfilePicture = () => {
  return (
    <div className="picture-container">
      <img src={benjaminPicture} alt="benjamin-picture"></img>
    </div>
  );
};

export default ProfilePicture;
