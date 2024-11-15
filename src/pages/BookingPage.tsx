import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from '../components/Bookingform';
import Button from '../components/SharedComponents/Button';
import { createBooking } from '../services/api';
import logo from '../assets/logo.svg';
import '../styles/BookingPage.css';

const BookingPage = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [players, setPlayers] = useState('');
  const [lanes, setLanes] = useState<number | undefined>(undefined);
  const [shoeSizes, setShoeSizes] = useState<string[]>([]);
  
  const navigate = useNavigate(); 

  useEffect(() => {
    const playerCount = parseInt(players);
    if (playerCount > 1) {
      setShoeSizes(new Array(playerCount).fill(''));
    } else {
      setShoeSizes([]);
    }
  }, [players]);

    const handleBookingSubmit = async () => {
      const bookingData = {
        when: `${date}T${time}`,
        lanes: lanes as number,
        people: parseInt(players || '0'),
        shoes: shoeSizes.map(Number), 
      };
  
      try {
        const response = await createBooking(bookingData);
        console.log('Booking successful:', response);

        const bookingNumber = response.bookingNumber || '123456';

        navigate('/confirmation', { state: { ...bookingData, bookingNumber } });
      } catch (error) {
        console.error('Booking failed:', error);
      }
    };

  return (
    <div className="booking-top">
      <div className="booking-img">
        <img src={logo} alt="Strajk Bowling" />
      </div>
      <div className="booking-text">
        <div className="booking-header">
          <h1>BOOKING</h1>
        </div>

        <div className="booking-p">
          <p>WHEN, WHAT & WHO</p>
        </div>

        {/* BookingForm for "WHEN, WHAT & WHO" */}
        <BookingForm
          section="when-what-who"
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          players={players}
          setPlayers={setPlayers}
          lanes={lanes}
          setLanes={setLanes}
        />

        <div className="booking-p-shoes">
          <p>SHOES</p>
        </div>
        
        <BookingForm
          section="shoes"
          shoeSizes={shoeSizes}
          setShoeSizes={setShoeSizes}
          players={players}  
        />

        <Button onClick={handleBookingSubmit} text="STRIIIIIIIIKE!" />
      </div>
    </div>
  );
};

export default BookingPage;