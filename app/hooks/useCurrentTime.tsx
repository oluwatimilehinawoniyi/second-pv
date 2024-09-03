import { useState, useEffect } from "react";

const useCurrentTime = (): {
  hours: string;
  minutes: string;
  seconds: string;
  period: string;
} => {
  const [time, setTime] = useState<{
    hours: string;
    minutes: string;
    seconds: string;
    period: string;
  }>({
    hours: "",
    minutes: "",
    seconds: "",
    period: "",
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      const formatter = new Intl.DateTimeFormat("en-US", options);
      const timeString = formatter.format(now);

      // const [year] = timeString.split(",");
      const [hours, minutes, seconds] = timeString.split(/[: ]/);
      const period = timeString.split(" ")[1];
      // console.log(year);

      setTime({
        hours,
        minutes,
        seconds,
        period,
      });
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return time;
};

export default useCurrentTime;
