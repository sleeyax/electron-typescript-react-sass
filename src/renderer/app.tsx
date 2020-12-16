import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import Application from './components/Application';
import store from './store';

// Create main element
const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

// Render component
ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <Application />
    </Provider>
  </AppContainer>,
  mainElement
);
