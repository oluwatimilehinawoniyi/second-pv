import useCurrentTime from "@/app/hooks/useCurrentTime";
import { Lightbulb, LightbulbOff, Maximize, Minimize } from "lucide-react";
import { useState, MouseEvent, useEffect, useRef } from "react";
import TimeDisplay from "./Time";

export default function DynamicIsland() {
  const [theme, setTheme] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [level, setLevel] = useState<number>(1);

  const handleIslandClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setLevel((prevLevel) => {
      if (prevLevel < 2) {
        return prevLevel + 1;
      } else {
        setIsOpen(false);
        return 1;
      }
    });
  };

  const handleThemeChange = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setTheme((prevTheme) => !prevTheme);
  };

  const handleMenuClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setIsOpen((prevOpen) => !prevOpen);
    // setLevel(3);
  };

  const time = useCurrentTime();
  return (
    <div
      className={`mx-auto flex items-center rounded-full bg-black px-2 py-1 transition-all duration-300 ease-linear ${
        level === 1 ? "w-36 justify-center" : "w-44 justify-between"
      }`}
      onClick={handleIslandClick}
    >
      {/* Menu Toggle Button */}
      {level === 2 && (
        <div className="flex-1" onClick={handleMenuClick}>
          {isOpen ? (
            <Minimize stroke="white" strokeWidth={3} size={18} />
          ) : (
            <Maximize stroke="white" strokeWidth={3} size={18} />
          )}
        </div>
      )}

      {/* Time Display */}
      <TimeDisplay />

      {/* Theme Toggle Button */}
      {level === 2 && (
        <div
          className="flex flex-1 items-center justify-end"
          onClick={handleThemeChange}
        >
          {theme ? (
            <LightbulbOff
              stroke="white"
              strokeWidth={3}
              size={18}
              className="stroke-red-500"
            />
          ) : (
            <Lightbulb
              stroke="white"
              strokeWidth={3}
              size={18}
              className="stroke-blue-500"
            />
          )}
        </div>
      )}
    </div>
  );
}
