import React from 'react';
import { Sidebar, Menu, Image, Checkbox } from 'semantic-ui-react';

const img = 'https://react.semantic-ui.com/assets/images/avatar/large/matthew.png';
const user = 'User Name';

const Side = (props) => (
  <Sidebar
    className="Side"
    animation='slide along'
    visible={props.visible}
  >
    <Menu vertical fluid className="Side-menu">
      <Menu.Item className="Side-user">
        <Image src={img} size="tiny" avatar />
        <div className="Side-user-name">{user}</div>
      </Menu.Item>
      <Menu.Item>
        <Menu.Header>Enable modules</Menu.Header>
        <Menu.Menu>
          <Menu.Item >
            <Checkbox label="To-do List" />
          </Menu.Item>
          <Menu.Item >
            <Checkbox label="Pomodoro" />
          </Menu.Item>
          <Menu.Item >
            <Checkbox label="Reminder" />
          </Menu.Item>
        </Menu.Menu>
      </Menu.Item>
    </Menu>
  </Sidebar>
);

export default Side;
