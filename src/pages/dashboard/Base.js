import React, { Component } from 'react';
import { Sidebar, Segment } from 'semantic-ui-react';
import Side from './Side';
import Topbar from './Topbar';

class Base extends Component {
  state = { visible: true }

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  render() {
    const { visible } = this.state;
    return (
      <div className="Base">
        <Sidebar.Pushable as={Segment}>
          <Side visible={visible} />

          <Sidebar.Pusher>
            <Topbar onClick={this.toggleVisibility} />
            {this.props.children}

          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>

    )
  }
}

export default Base;

