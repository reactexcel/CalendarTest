import React from "react";
import { week } from "../../utils/Week";
import Time from "./Time";

const CalendarDay = ({ date }) => {
  const getWeekDay = (key) => {
    if (date.getDay() + key > 7) {
      return week[date.getDay() + key - 8];
    }
    return week[date.getDay() + key - 1];
  };

  return (
    <div>
      <div className="d-flex justify-content-end">
        {[1, 2, 3, 4, 5, 6, 7].map((value, key) => {
          return (
            <div className="weeks text-muted" key={key}>
              <span className="weekDate">{date.getDate() + key}</span>
              <p className="weekDay">{getWeekDay(key)}</p>
              <div className="mt-5">
                <Time date={date} index={key} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarDay;
