import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../styles/LoadingScreen.css';

const LoadingScreen = ({ onExit }: { onExit: () => void }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    onExit(); 
    navigate('/'); 
  };

  return (
    <div className="loading-screen" onClick={handleClick}>
      <img src={logo} alt="Strajk Bowling" />
      <div className='loading-txt'>
        <h1>STRAJK</h1>
        <p>BOWLING</p>
      </div>
    </div>
  );
};

export default LoadingScreen;