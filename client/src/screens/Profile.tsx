import Header from '../components/Header';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import '../css/Profile.css';

const ProfileButton: React.FC = () => {
  const history = useHistory();
  const handleButtonClick = () => {
    history.push('/home/myprofile/profile');
  };

  return (
    <div>
      <button onClick={handleButtonClick}>
      Мои данные
    </button>
    </div>
  );
};

const AchievementsButton: React.FC = () => {
  const history = useHistory();

  const handleButtonClick = () => {
    history.push('/home/myprofile/achievements');
  };

  return (
    <div>
      <button onClick={handleButtonClick}>
        Достижения
      </button>
    </div>
  );
};

const NotesButton: React.FC = () => {
  const history = useHistory();

  const handleButtonClick = () => {
    history.push('/home/myprofile/notes');
  };

  return (
    <div>
      <button onClick={handleButtonClick}>
        Заметки
      </button>
    </div>
  );
};

const ProfileScreen = () => {
    return (
        <body className='profilleBodyContainer'>
        <Header/>
            <h1>Мой профиль</h1>
            <main>
                <Container>
                    <ProfileButton/>
                    <AchievementsButton/>
                </Container>
            </main>
        </body>
    ) 
}

export default ProfileScreen