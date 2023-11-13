import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function TimingBox() {
  const { currentTime } = useSelector((state) => state.time);
  const dispatch = useDispatch();
  const [time, setTime] = useState(currentTime);

  if (time === 0) {
    dispatch({
      type: "timeOut",
    });
  }

  useEffect(() => {
    let interval;
    if (time > 0) {
      interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [time]);

  const formatTime = () => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    const formattedTime = `${String(hours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    return formattedTime;
  };

  return (
    <div className=" px-2 text-xl text-white">
      Time remaining: {formatTime()}
      <span></span>
    </div>
  );
}

export default TimingBox;
