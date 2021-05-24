import React from "react";
import { scheduledMeetings } from "../../utils/Meetings";
import { month } from "../../utils/Month";

const Time = ({ date, index }) => {
  const meetingDetails = React.useRef({});

  const handleCheckMeeting = () => {
    let isMeeting = false;
    scheduledMeetings.forEach((value) => {
      if (value.Time.getDate() === date.getDate() + index) {
        meetingDetails.current = value;
        isMeeting = true;
      }
    });
    return isMeeting;
  };

  const handleTime = (time) => {
    console.log(time);

    let d = time.getHours() + " : " + time.getMinutes();
    if(time.getHours()>12){
        d = (time.getHours()-12)+" : "+ time.getMinutes() + "PM"
        return d;
    } else {
        return time.getHours()+" : "+ time.getMinutes() + "AM"
    }
  };
  if (handleCheckMeeting()) {
    return (
      <>
        <div className="time-block">
          <h1>{meetingDetails.current.Title}</h1>
          <p>{handleTime(meetingDetails.current.Time)}</p>
          {/* <span>{meetingDetails.current.Time.toString()}</span> */}
          <p>{meetingDetails.current.Duration}</p>
        </div>
      </>
    );
  } else {
    return <div />;
  }
};

export default Time;
