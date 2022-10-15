import React from 'react';
import './App.css';
const { useState } = React;

function App() {
  const [currentState, setState] = useState<{
    isRunning: boolean;
    currentChoice: string;
  }>({ isRunning: true, currentChoice: "" })

  // const [currentInterval, setInterval] = useState<Interval>({ setChoice: start(), intervalDuration: 25 })
  // const interval = null;
  // const intervalDuration = 25;
  const duration = 1000;

  // this.start = this.start.bind(this);
  // this.stop = this.stop.bind(this);
  // this.reset = this.reset.bind(this);
  // this.pickChoice = this.pickChoice.bind(this);
  // this.setChoice = this.setChoice.bind(this);
  // }

  const start = () => {
    // clearInterval(interval);
    // interval = setInterval(setChoice, intervalDuration);
    const tempState = currentState;
    tempState.isRunning = true;
    setState(tempState);

    setTimeout(() => {
      if (currentState.isRunning) {
        stop()
      }
    }, duration);
    return
  }


  const stop = () => {
    // clearInterval(this.interval);
    const tempState = currentState;
    tempState.isRunning = false;
    setState(tempState);
    return
  }

  // const reset = () => {
  //   clearInterval(this.interval);
  //   this.setState({ isRunning: false, currentChoice: '' });
  // }

  // const pickChoice = () => {
  //   const { items } = this.props;
  //   const choice = items[Math.floor(Math.random() * items.length)];
  //   return choice;
  // }

  // const setChoice = () => {
  //   setState({ currentChoice: pickChoice() })
  // }

  // const [currentInterval, setInterval] = useState<Interval>({ setChoice: setChoice(), intervalDuration: 25 })
  // // render() {
  // const { isRunning, currentChoice } = this.state;

  return (
    <div className="RandomPicker">
      <RandomPickerChoice choice={currentState.currentChoice} />
      <RandomPickerControls
        isRunning={currentState.isRunning}
        hasChoice={currentState.currentChoice.trim().length > 0}
      // start={start}
      // stop={() => stop()}
      // reset={reset}
      />

    </div>
  );
}
// }

// RandomPicker.propTypes = {
//   items: PropTypes.array,
//   duration: PropTypes.number
// };

// class RandomPickerChoice extends React.PureComponent {

const RandomPickerChoice = (props: { choice: string }) => {
  const content = props.choice.trim().length > 0 ? props.choice : '?';

  return (
    <div className="RandomPicker__choice">
      <span className="RandomPicker__choiceItem">{content}</span>
    </div>
  );
}

// RandomPickerChoice.propTypes = {
//   choice: PropTypes.string
// };

// class RandomPickerControls extends React.PureComponent {
const RandomPickerControls = (props: { isRunning: boolean; hasChoice: boolean }) => {
  return (
    <div className="RandomPicker__controls">
      <button
        className={`RandomPicker__button ${props.isRunning && 'RandomPicker__button--stop'}`}
        // onClick={() => props.isRunning ? stop() : start()}
        onClick={() => props.isRunning ? stop() : start()}

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
