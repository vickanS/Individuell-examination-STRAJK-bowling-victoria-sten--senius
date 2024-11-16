import React, { useState } from 'react';
import '../styles/Bookingform.css';

interface BookingFormProps {
  section?: string;
  date?: string;
  setDate?: React.Dispatch<React.SetStateAction<string>>;
  time?: string;
  setTime?: React.Dispatch<React.SetStateAction<string>>;
  players?: string;
  setPlayers?: React.Dispatch<React.SetStateAction<string>>;
  lanes?: number | undefined;
  setLanes?: React.Dispatch<React.SetStateAction<number | undefined>>;
  shoeSizes?: string[];
  setShoeSizes?: React.Dispatch<React.SetStateAction<string[]>>;
}

const BookingForm: React.FC<BookingFormProps> = ({
  section,
  date,
  setDate,
  time,
  setTime,
  players,
  setPlayers, 
  lanes = undefined,
  setLanes,
  shoeSizes,
  setShoeSizes,
}) => {
  const [playersError, setPlayersError] = useState<string>('');

  const handlePlayersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPlayers && setPlayers(value);

    if (parseInt(value) % 2 !== 0 && value !== '') {
      setPlayersError('You can be a minimum of 2 players per lane');
    } else {
      setPlayersError('');
    }
  };

  const handleShoeSizeChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newShoeSize = e.target.value;
    if (setShoeSizes) {
      setShoeSizes([
        ...(shoeSizes || []).slice(0, index),
        newShoeSize,
        ...(shoeSizes || []).slice(index + 1),
      ]);
    }
  };

  if (section === 'when-what-who') {
    return (
      <form className="booking-form">
        <div className="date-time">
          <div className="date">
            <label htmlFor="date">DATE</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate && setDate(e.target.value)}
            />
          </div>

          <div className="time">
            <label htmlFor="time">TIME</label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime && setTime(e.target.value)}
            />
          </div>
        </div>

        <div className="players-lanes">
          <div className="players">
            <label htmlFor="players">NUMBER OF AWESOME BOWLERS</label>
            <input
              type="number"
              id="players"
              value={players}
              onChange={handlePlayersChange}
              min="2"
              className={players && parseInt(players) % 2 !== 0 ? 'error' : ''}
              style={{
                fontSize: '24px',
                width: '100%',
              }}
            />
            {playersError && (
              <small className="players-info">{playersError}</small>
            )}
          </div>

          <div className="lanes">
            <label htmlFor="lanes">NUMBER OF LANES</label>
            <input
              type="number"
              id="lanes"
              value={lanes ?? ''}
              onChange={(e) => {
                if (setLanes) {
                  const value = e.target.value === '' ? undefined : Number(e.target.value);
                  setLanes(value);
                }
              }}
              min="1"
              style={{
                fontSize: '24px',
                width: '100%',
              }}
            />
            {players && parseInt(players) > 0 && (
              <small className="lanes-info">
                (Each lane can hold up to 4 people. Please adjust accordingly.)
              </small>
            )}
          </div>
        </div>
      </form>
    );
  }

  if (section === 'shoes') {
    return (
      <div className="shoe-sizes">
        {players && parseInt(players) > 1 ? (
          shoeSizes?.map((_, index) => (
            <div className="shoe-size" key={index}>
              <label htmlFor={`shoe-size-${index}`}>Shoe Size Player {index + 1} (EU Size)</label>
              <div className="input-button">
                <input
                  type="number"
                  id={`shoe-size-${index}`}
                  value={shoeSizes[index]}
                  onChange={(e) => handleShoeSizeChange(e, index)}
                  min="30"
                  max="50"
                  step="1"
                />
                <button className="delete-person">-</button>
              </div>
            </div>
          ))
        ) : (
          <p>Please enter the number of players to select shoe sizes.</p>
        )}
        <button className='add-person'>+</button>
      </div>
    );
  }

  return null;
};

export default BookingForm;