import React from 'react';
import './App.css';
const { useState } = React;

function App() {

  const [currentState, setState] = useState<{
    isRunning: boolean;
    currentChoice: string;
  }>({ isRunning: true, currentChoice: "" })

  type Interval = {
    setChoice: void,
    intervalDuration: number
  }

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
    clearInterval(interval);
    this.interval = setInterval(this.setChoice, this.intervalDuration);
    this.setState({ isRunning: true });
    setTimeout(() => {
      if (this.state.isRunning) {
        this.stop()
      }
    }, this.duration);
  }


  const stop = () => {
    clearInterval(this.interval);
    this.setState({ isRunning: false });
  }

  const reset = () => {
    clearInterval(this.interval);
    this.setState({ isRunning: false, currentChoice: '' });
  }

  const pickChoice = () => {
    const { items } = this.props;
    const choice = items[Math.floor(Math.random() * items.length)];
    return choice;
  }

  const setChoice = () => {
    setState({ currentChoice: pickChoice() })
  }

  const [currentInterval, setInterval] = useState<Interval>({ setChoice: setChoice(), intervalDuration: 25 })
  // render() {
  const { isRunning, currentChoice } = this.state;

  return (
    <div className="RandomPicker">
      <RandomPickerChoice choice={currentChoice} />
      <RandomPickerControls
        isRunning={isRunning}
        hasChoice={currentChoice.trim().length > 0}
        start={this.start}
        stop={this.stop}
        reset={this.reset}
      />
    </div>
  );
}
// }

RandomPicker.propTypes = {
  items: PropTypes.array,
  duration: PropTypes.number
};

// class RandomPickerChoice extends React.PureComponent {
const RandomPickerChoice = () => {
  // const { choice } = this.props;

  const content = choice.trim().length > 0 ? choice : '?';

  return (
    <div className="RandomPicker__choice">
      <span className="RandomPicker__choiceItem">{content}</span>
    </div>
  );
}

RandomPickerChoice.propTypes = {
  choice: PropTypes.string
};

class RandomPickerControls extends React.PureComponent {
  render() {
    const {
      isRunning,
      hasChoice,
      start,
      stop,
      reset
    } = this.props;

    return (
      <div className="RandomPicker__controls">
        <button
          className={`RandomPicker__button ${isRunning && 'RandomPicker__button--stop'}`}
          onClick={isRunning ? stop : start}
        >
          {isRunning ? 'stop' : 'start'}
        </button>
        <button
          disabled={isRunning || !hasChoice}
          className="RandomPicker__button RandomPicker__button--reset"
          onClick={reset}
        >
          reset
        </button>
      </div>
    );
  }
}

// RandomPickerControls.propTypes = {
type RandomPickerControlsProps = {
  isRunning: boolean,
  hasChoice: boolean,
  start: Function,
  stop: Function,
  reset: Function,
};

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
