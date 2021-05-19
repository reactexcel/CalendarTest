import React from "react";
import CalendarComponent from "../Components/Calendar";
const Home = () => {
  return (
    <div>
      <div className="text-dark shadow-lg p-1">
        <h3 className="mx-4 mt-1">
          <i className="fa fa-calendar-alt"></i> Calender
        </h3>
      </div>
      <div>
        <CalendarComponent />
      </div>
    </div>
  );
};

export default Home;
