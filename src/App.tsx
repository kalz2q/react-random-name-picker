import React from 'react';
import './App.css';
const { useState } = React;
// next button で次を random に表示する

function App() {
  const [stoppedTime, setStoppedTime] = useState(0);
  const [time, setTime] = useState(0);
  const [lastStartedAt, setLastStartedAt] = useState(0);
  const [currentChoice, setCurrentChoice] = useState(namesList[Math.floor(Math.random() * namesList.length)])

  const calcTime = () => {
    return lastStartedAt === 0
      ? stoppedTime
      : stoppedTime + new Date().getTime() - lastStartedAt;
  };

  const timer = () => {
    if (lastStartedAt === 0) {
      setLastStartedAt(new Date().getTime());
    } else {
      setStoppedTime(calcTime());
      setLastStartedAt(0);
    }
    return;
  };

  requestAnimationFrame(() => setTime(calcTime()));

  return (
    <div className="App">
      <span>{currentChoice}</span>
      <p>timer (ms): {time}</p>
      <p>
        <button onClick={() => timer()}>
          {lastStartedAt === 0 ? "start" : "stop"}
        </button>
      </p>
    </div>
  );
}


const namesList = [
  'Marcelo',
  'Lizzette',
  'Pauline',
  'Fumiko',
  'Tomasa',
  'Bertha',
  'Antoinette',
  'Tianna',
  'Ammie',
  'Victorina',
  'Marlon',
  'Jules',
  'Arletha',
  'Ellyn',
  'Karol',
  'Corrin',
  'Josephine',
];

export default App;
