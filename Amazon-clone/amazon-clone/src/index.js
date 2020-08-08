import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StateProvider as Provider } from './context/StateProvider';

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
