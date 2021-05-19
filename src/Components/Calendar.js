import React from "react";
import Calendar from "react-calendar";
import "./Calendar.css";
// import 'react-calendar/dist/Calendar.css';

const CalendarComponent = () => {
  const [value, onChange] = React.useState(new Date());
  console.log(value, onChange)
  return (
    <div>
      <div className="d-flex justify-content-center m-5">
        <Calendar
          onChange={onChange}
          value={value}
          className="calendar"
          defaultView="month"
        />
      </div>
    </div>
  );
};

export default CalendarComponent;
