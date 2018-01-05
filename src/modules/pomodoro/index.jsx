
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { Button } from 'semantic-ui-react';
import Stopwatch from './stop-watch';

// import './style.css';

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
        <Stopwatch
          seconds={0}
          minutes={0}
          hours={0}
          limit={"00:00:03"}
          withLoop={true}
          onCallback={() => console.log('Finish')}
        />
      </div>
    );
  }
}

export default Pomodoro;
