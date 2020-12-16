import React from 'react';
import CounterImg from './Counter.jpg';

import './Counter.scss';

export interface Props {
  value: number;

  incrementValue: () => any;
  decrementValue: () => any;
}

const Counter: React.FunctionComponent<Props> = ({ value, incrementValue, decrementValue }) => (
  <div className="counter">
    <p>
      <img src={CounterImg} alt="img" />
    </p>
    <p id="counter-value">Current value: {value}</p>
    <p>
      <button id="increment" onClick={incrementValue}>
        Increment
      </button>
      <button id="decrement" onClick={decrementValue}>
        Decrement
      </button>
    </p>
  </div>
);

export default Counter;
