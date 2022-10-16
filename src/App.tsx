import React from 'react';
import './App.css';
const { useState } = React;

function App() {
  const [currentState, setState] = useState<{
    isRunning: boolean;
    currentChoice: string;
  }>({
    isRunning: true,
    currentChoice: namesList[Math.floor(Math.random() * namesList.length)]
  })

  const pickChoice = (namesList: string[]) => {
    const choice = namesList[Math.floor(Math.random() * namesList.length)];
    return choice;
  }

  const setChoice = (namesList: string[]) => {
    const tempCurrentState = currentState;
    tempCurrentState.currentChoice = pickChoice(namesList);
    // console.log(tempCurrentState.currentChoice);
    setState(tempCurrentState);
    return
  }

  setChoice(namesList)

  requestAnimationFrame(() => setChoice(namesList));

  return (
    <div className="RandomPicker__choice">
      <span className="RandomPicker__choiceItem">{currentState.currentChoice}</span>
    </div>
  );
}


const RandomPickerChoice = (props: { choice: string }) => {
  const content = props.choice.trim().length > 0 ? props.choice : '?';

  return (
    <div className="RandomPicker__choice">
      <span className="RandomPicker__choiceItem">{content}</span>
    </div>
  );
}

const RandomPickerControls = (props: { isRunning: boolean; hasChoice: boolean }) => {
  return (
    <div className="RandomPicker__controls">
      <button
        className={`RandomPicker__button ${props.isRunning && 'RandomPicker__button--stop'}`}
      // onClick={() => props.isRunning ? stop() : start()}
      // onClick={() => props.isRunning ? stop() : start()}

      >
        {props.isRunning ? 'stop' : 'start'}
      </button>
      <button
        disabled={props.isRunning || !props.hasChoice}
        className="RandomPicker__button RandomPicker__button--reset"
      // onClick={reset}
      >
        reset
      </button>
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
