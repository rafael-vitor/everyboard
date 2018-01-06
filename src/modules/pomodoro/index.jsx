
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { Button } from 'semantic-ui-react';
import Timer from './timer';

class Pomodoro extends Component {
  constructor(props: Props) {
    super(props);
    autoBind(this);
    this.state = {
    };
  }

  render() {
    return (
      <div className="Pomodoro">
        <Timer
          seconds={0}
          minutes={0}
          hours={0}
          withLoop={false}
          onCallback={() => console.log('Finish')}
        />
      </div>
    );
  }
}

export default Pomodoro;
