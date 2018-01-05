import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import registerServiceWorker from './registerServiceWorker';

const App = () => (
  <h1>Start</h1>
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
