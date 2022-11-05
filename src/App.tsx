import React from 'react';
import './App.css';
// react-random-name-picker
const { useState, useEffect } = React;

function App() {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  colorlist.sort(() => Math.random() - 0.5);
  namelist.sort(() => Math.random() - 0.5);
  const [bgcolor, setBGColor] = useState(colorlist[0]);
  const [[name, expression], setName] = useState(namelist[0]);
  const delay: number = 2000;

  document.documentElement.style.setProperty("--background", bgcolor);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isRunning) {
        setCounter((prevCount) => (prevCount + 1) % colorlist.length);
        setBGColor(colorlist[counter]);
      }
    }, delay);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="App">
      <h1>{bgcolor}</h1>
      <button onClick={() => setIsRunning(true)}>START</button>
      <button
        onClick={() => {
          setIsRunning(false);
          console.log(counter);
        }}
      >
        STOP
      </button>
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

  const doThis = () => {
    if (((new Date().getTime()) % 10) === 0) { setCurrentChoice(namesList[Math.floor(Math.random() * namesList.length)]) };
  }
  // requestAnimationFrame(() => setTime(calcTime()));
  // requestAnimationFrame(() => doThis());
  requestAnimationFrame(() => { setCurrentChoice(namesList[Math.floor(Math.random() * namesList.length)]) });

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

const colorlist = [
  "AliceBlue",
  "AntiqueWhite",
  "Aqua",
  "Aquamarine",
  "Azure",
  "Beige",
  "Bisque",
  "Black",
  "BlanchedAlmond",
  "Blue",
  "BlueViolet",
  "Brown",
  "BurlyWood",
  "CadetBlue",
  "Chartreuse",
  "Color Mixer",
  "Color Picker",
  "Chocolate",
  "Coral",
  "CornflowerBlue",
  "Cornsilk",
  "Crimson",
  "Cyan",
  "DarkBlue",
  "DarkCyan",
  "DarkGoldenRod",
  "DarkGray",
  "DarkGrey",
  "DarkGreen",
  "DarkKhaki",
  "DarkMagenta",
  "DarkOliveGreen",
  "DarkOrange",
  "DarkOrchid",
  "DarkRed",
  "DarkSalmon",
  "DarkSeaGreen",
  "DarkSlateBlue",
  "DarkSlateGray",
  "DarkSlateGrey",
  "DarkTurquoise",
  "DarkViolet",
  "DeepPink",
  "DeepSkyBlue",
  "DimGray",
  "DimGrey",
  "DodgerBlue",
  "FireBrick",
  "FloralWhite",
  "ForestGreen",
  "Fuchsia",
  "Gainsboro",
  "GhostWhite",
  "Gold",
  "GoldenRod",
  "Gray",
  "Grey",
  "Green",
  "GreenYellow",
  "HoneyDew",
  "HotPink",
  "IndianRed",
  "Indigo",
  "Ivory",
  "Khaki",
  "Lavender",
  "LavenderBlush",
  "LawnGreen",
  "LemonChiffon",
  "LightBlue",
  "LightCoral",
  "LightCyan",
  "LightGoldenRodYellow",
  "LightGray",
  "LightGrey",
  "LightGreen",
  "LightPink",
  "LightSalmon",
  "LightSeaGreen",
  "LightSkyBlue",
  "LightSlateGray",
  "LightSlateGrey",
  "LightSteelBlue",
  "LightYellow",
  "Lime",
  "LimeGreen",
  "Linen",
  "Magenta",
  "Maroon",
  "MediumAquaMarine",
  "MediumBlue",
  "MediumOrchid",
  "MediumPurple",
  "MediumSeaGreen",
  "MediumSlateBlue",
  "MediumSpringGreen",
  "MediumTurquoise",
  "MediumVioletRed",
  "MidnightBlue",
  "MintCream",
  "MistyRose",
  "Moccasin",
  "NavajoWhite",
  "Navy",
  "OldLace",
  "Olive",
  "OliveDrab",
  "Orange",
  "OrangeRed",
  "Orchid",
  "PaleGoldenRod",
  "PaleGreen",
  "PaleTurquoise",
  "PaleVioletRed",
  "PapayaWhip",
  "PeachPuff",
  "Peru",
  "Pink",
  "Plum",
  "PowderBlue",
  "Purple",
  "RebeccaPurple",
  "Red",
  "RosyBrown",
  "RoyalBlue",
  "SaddleBrown",
  "Salmon",
  "SandyBrown",
  "SeaGreen",
  "SeaShell",
  "Sienna",
  "Silver",
  "SkyBlue",
  "SlateBlue",
  "SlateGray",
  "SlateGrey",
  "Snow",
  "SpringGreen",
  "SteelBlue",
  "Tan",
  "Teal",
  "Thistle",
  "Tomato",
  "Turquoise",
  "Violet",
  "Wheat",
  "White",
  "WhiteSmoke",
  "Yellow",
  "YellowGreen"
];

const namelist = [
  ["あいかみれ", "愛華みれ 宝塚"],
  ["あいさかとうま", "逢坂冬馬 同志少女よ、敵を撃て"],
  ["あいざわひとみ", "相澤仁美"],
  ["あいざわりな", "逢沢りな"],
  ["あいじまかずゆき", "相島一之"]
];

export default App;
