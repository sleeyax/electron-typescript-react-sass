import { hot } from 'react-hot-loader/root';
import React from 'react';
import './Application.scss';

import CounterContainer from './counter/CounterContainer';

const Application = () => (
  <div>
    Hello World from Electron!
    <CounterContainer />
  </div>
);

export default hot(Application);
