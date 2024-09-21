import React, { useState, useEffect, useCallback } from "react";

interface TimerProps {
  interval?: number;
 
}

const Timer: React.FC<TimerProps> = ({ interval = 1000 }) => {
  const [opacity, setOpacity] = useState(1); // État pour l'opacité

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setOpacity(scrollY > 0 ? 0.6 : 1); // Modifie l'opacité en fonction du défilement
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Définissons la date limite comme une constante en dehors du composant
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const DEADLINE: Date = new Date("2025-03-01T00:00:00");
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  
  const updateTimer = useCallback(() => {
    const now = new Date().getTime();
    const distance = DEADLINE.getTime() - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setTime({ days, hours, minutes, seconds });
  }, [DEADLINE]);

  useEffect(() => {
    const timerId = setInterval(updateTimer, interval);
    return () => clearInterval(timerId);
  }, [interval, updateTimer]); 

  
  return (
    <div className="sticky top-14" style={{ opacity }}> 
      <div className=" flex flex-col  text-5xl text-right font-bold  gap-y-5 ">
        <div>
          {time.days}
          <span className="text-xs text-[#CC001E]"> Day</span>{" "}
        </div>
        <div>
          {time.hours}
          <span className="text-xs text-[#CC001E]"> Hrs</span>
        </div>
        <div>
          {time.minutes}
          <span className="text-xs text-[#CC001E]"> Min</span>
        </div>
        <div>
          {time.seconds}
          <span className="text-xs text-[#CC001E]"> sec</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
// ref:https://dev.to/yuridevat/how-to-create-a-timer-with-react-7b9
