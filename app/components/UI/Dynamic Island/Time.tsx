"use client";
import React from "react";
import useCurrentTime from "@/app/hooks/useCurrentTime";

const TimeDisplay: React.FC = () => {
  const { hours, minutes, period } = useCurrentTime();

  return (
    <div className="font-semibold text-brown">
      <span className="">{hours}</span>
      <span className="mx-[2px] animate-blink">:</span>
      <span className="">{minutes}</span>
      <span className="ml-1">{period}</span>
    </div>
  );
};

export default TimeDisplay;
