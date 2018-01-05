import React from 'react';
import { Icon } from 'semantic-ui-react';
import './style.css';

const Topbar = (props) => (
  <div className="Topbar">
    <div onClick={props.onClick} >
      <Icon
        name="bars"
        size="big"
        className="Topbar-icon"
      />
    </div>
  </div>
);

export default Topbar;
