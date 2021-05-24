import React, { useState } from "react";
import CalendarDay from "./CalenderDay";
import "./CustomCalendar.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { month } from "../../utils/Month";
const CustomCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  const handleChange = (value) => {
    setDate(value);
    setShow(false);
  };

  const handlePrev = () => {
    setDate(
      new Date(
        date.getFullYear(),
        date.getMonth()-1,
        date.getDay(),
        date.getHours(),
      )
    );
  };
  const handleNext = () => {
    setDate(
      new Date(
        date.getFullYear(),
        date.getMonth()+1,
        date.getDay(),
        date.getHours(),
      )
    );
  };
  console.log(date);
  return (
    <div className="">
      <div className="calender-navigation">
        <span>Today</span>
        <button className="btn-navigation mx-5" onClick={handlePrev}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="btn-navigation mx-5" onClick={handleNext}>
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="ml-5">
          {month[date.getMonth()] + " " + date.getFullYear()}
        </span>
        <button className="btn-navigation mx-1" onClick={handleShow}>
          <i className="fas fa-chevron-down"></i>
        </button>
      </div>
      {show && (
        <div className="calendar-component">
          <Calendar onChange={handleChange} value={date} defaultView="year" />
        </div>
      )}
      <div>
        <CalendarDay date={date} />
      </div>
    </div>
  );
};

export default CustomCalendar;
