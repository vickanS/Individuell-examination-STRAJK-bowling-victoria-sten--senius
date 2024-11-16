import { useLocation, useNavigate} from 'react-router-dom';
import logo from '../assets/logo.svg';
import Button from '../components/SharedComponents/Button';
import '../styles/confirmationPage.css'

const Confirmation = () => {

  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className='confirmation-top'>
        <div className='confirmation-img'>
          <img src={logo} alt="Strajk Bowling" />
        </div>
        <div className='confirmation-text'>
          <div className='No-confirmation-header'>
            <h1>NO BOOKING MADE</h1>
          </div>
          <div className='confirmation-p'>
            <p>No booking has been made yet.</p>
          </div>
        </div>
      </div>
    );
  }

  const { when, lanes, people, bookingNumber } = state || {};

  const handleLoadingScreenNavigation = () => {
    navigate('/loading');  
  };

  return (
    <div className='confirmation-top'>
      <div className='confirmation-img'>
        <img src={logo} alt="Strajk Bowling" />
      </div>
      <div className='confirmation-text'>
        <div className='confirmation-header'>
          <h1>SEE YOU SOON!</h1>
        </div>
        <div className='confirmation-p'>
          <p>BOOKING DETAILS</p>
        </div>

        <div className='confirmation-info'>
          <p><strong>WHEN:</strong> {new Date(when).toLocaleString()}</p>
          <p><strong>WHO:</strong> {people} persons</p>
          <p><strong>LANES:</strong> {lanes}</p>
          <p><strong>BOOKING NUMBER:</strong> {bookingNumber}</p>
        </div>

        <Button onClick={handleLoadingScreenNavigation} text="SWEET, LETS GO!" />
      </div>  
    </div>
  );
};

export default Confirmation;