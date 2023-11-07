import { useEffect, useState } from "react";

function App() {
  const [secondTime, setSecondTime] = useState(new Date().getSeconds());
  const [minutesTime, setMinutesTime] = useState(new Date().getMinutes());
  const [hoursTime, setHoursTime] = useState(new Date().getHours());

  useEffect(() => {
    const intervalId = setInterval(() => {
      SetTime();
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  function SetTime() {
    setSecondTime(new Date().getSeconds());
    setMinutesTime(new Date().getMinutes());
    setHoursTime(new Date().getHours());
  }

  return (
    <main className="main">
      <div className="layer">
        <div className="box">
          <h2 className="time">{hoursTime}</h2>
          <h3 className="name">HOURS</h3>
        </div>
        <div className="box odd">:</div>
        <div className="box">
          <h2 className="time">{minutesTime}</h2>
          <h3 className="name">MINS</h3>
        </div>
        <div className="box odd">:</div>
        <div className="box">
          <h2 className="time">{secondTime}</h2>
          <h3 className="name">SEC</h3>
        </div>
      </div>
    </main>
  );
}

export default App;
