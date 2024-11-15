import React from 'react';

interface BookingData {
  when: string;
  lanes: number;
  people: number;
  bookingNumber: string;
}

const Confirmation: React.FC<{ bookingData: BookingData }> = ({ bookingData }) => {
  return (
    <div>
      <h2>Booking Confirmation</h2>

      <div>
        <h3>WHEN</h3>
        <p>{bookingData.when}</p>
      </div>

      <div>
        <h3>WHO</h3>
        <p>{bookingData.people} people</p>
      </div>

      <div>
        <h3>LANES</h3>
        <p>{bookingData.lanes} lanes</p>
      </div>

      <div>
        <h3>BOOKING NUMBER</h3>
        <p>{bookingData.bookingNumber}</p>
      </div>
    </div>
  );
};

export default Confirmation;