import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './pages/dashboard';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';

const App = () => (
  <Dashboard />
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
