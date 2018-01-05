import React from 'react';
import Reminder from '../../modules/reminder';
import TodoList from '../../modules/todo-list';
import Base from './Base';

const Dashboard = () => (
  <Base>
    {/* <Reminder /> */}
    <TodoList />
  </Base>
);

export default Dashboard;
