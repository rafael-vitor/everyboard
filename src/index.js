import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './modules/todo-list';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';

const App = () => (
  <TodoList />
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
