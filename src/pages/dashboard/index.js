import React from 'react';
import Reminder from '../../modules/reminder';
import TodoList from '../../modules/todo-list';
import Note from '../../modules/note';
import Base from './Base';

const Dashboard = () => (
  <Base>
    {/* <Reminder /> */}
    {/* <TodoList /> */}
    <Note />
  </Base>
);

export default Dashboard;
