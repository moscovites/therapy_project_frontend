import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (selectedDate) => {
    setDate(selectedDate);
    // You can perform any actions with the selected date here
  };

  return (
    <div>
      <h2>Calendar Example</h2>
      <Calendar onChange={onChange} value={date} />
      <p>Selected Date: {date.toDateString()}</p>
    </div>
  );
};

export default Calendar;
