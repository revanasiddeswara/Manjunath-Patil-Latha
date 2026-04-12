import { useEffect, useState } from "react";

const weddingDate = new Date("2026-05-08T09:23:00").getTime();

const Countdown = () => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = weddingDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const format = (num: number) => String(num).padStart(2, "0");

  return (
    <div className="flex flex-col items-center mt-6">
      
      {/* Time */}
      <p className="text-3xl md:text-5xl font-bold tracking-[0.2em] text-[#f8f6f2]">
        {format(timeLeft.days)} :
        {format(timeLeft.hours)} :
        {format(timeLeft.minutes)} :
        {format(timeLeft.seconds)}
      </p>

      {/* Labels */}
      <div className="flex justify-between w-[280px] md:w-[400px] mt-2 text-xs md:text-sm tracking-widest text-white/70">
        <span>Days</span>
        <span>Hour</span>
        <span>Min</span>
        <span>Sec</span>
      </div>

    </div>
  );
};

export default Countdown;