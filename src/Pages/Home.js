import React, { useState } from "react";
import "../Style/button.css";
// import CalendarComponent from "../Components/CalendarComponent/Calendar";
import CustomCalendar from "../Components/CustomCalendar/CustomCalendar";
import NewMeeting from "../Components/Modal/Modal";

const Home = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      <div className="d-flex justify-content-between text-dark shadow-lg p-1">
        <h3 className="mx-4 mt-3">
          <i className="fa fa-calendar-alt"></i> Calender
        </h3>
        <button className="m-3 btn-purple" onClick={handleShow}>
          <i className="fal fa-plus"></i> New Meeting
        </button>
      </div>
      <div>
        <CustomCalendar />
      </div>
      <NewMeeting show={show} handleClose={handleClose} />
    </div>
  );
};

export default Home;
