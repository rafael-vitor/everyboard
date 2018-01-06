/* @flow */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { fillTextWithFormat, getPercentageTimeLeft } from './utils';
import { Button } from 'semantic-ui-react';
import CircularProgressbar from 'react-circular-progressbar';
import autoBind from 'react-autobind';

import './style.css';


type Props = {
  seconds: number,
  minutes: number,
  limit?: string,
  withLoop?: boolean,
  defaultStyles: any,
  custom: any,
  onCallback?: any,
};

type State = {
  text: string,
  stateMinutes: number,
  stateSeconds: number,
  intervalId: number
};

class StopWatch extends Component {
  static defaultProps = {
    withLoop: false,
  };
  props: Props;
  state: State;

  constructor(props: Props): void {
    super(props);
    autoBind(this);

    const {
      minutes,
      seconds,
     } = props;

    const text: string = fillTextWithFormat(minutes, seconds);

    this.state = {
      text,
      stateMinutes: minutes,
      stateSeconds: seconds,
      intervalId: 0,
    };
  }

  componentWillReceiveProps(): void {
    this.setState({
      stateMinutes: 0,
      stateSeconds: 0,
      intervalId: 0,
    });
  }

  componentDidMount(): void {
    // this.timer();
  }

  componentWillUnmount(): void {
    this.stopToCount();
  }

  stopToCount() {
    const {
      minutes,
      seconds,
     } = this.props;

    const {
       intervalId,
     } = this.state;

    clearInterval(intervalId);

    const text: string = fillTextWithFormat(minutes, seconds);

    this.setState({
      text,
      stateMinutes: minutes,
      stateSeconds: seconds,
      intervalId: 0,
    });
  }

  reset() {
    this.stopToCount();
    this.timer();
  }

  counter(): void {
    const {
       limit,
      withLoop,
      onCallback,
     } = this.props;

    const {
      stateMinutes,
      stateSeconds,
     } = this.state;

    this.setState({
      stateSeconds: stateSeconds + 1,
    });
    if (stateSeconds >= 60) {
      this.setState({
        stateSeconds: 0,
        stateMinutes: stateMinutes + 1,
      });
    }

    const text: string = fillTextWithFormat(stateMinutes, stateSeconds);

    this.setState({
      text,
    });

    if (limit === text) {
      this.stopToCount();
      if (withLoop) {
        this.timer();
      }
      if (typeof onCallback === 'function') {
        onCallback();
      }
    }
  }

  timer(): void {
    // TODO: setInterval return a number.
    const intervalId = setInterval(() => {
      this.counter();
    }, 1000);

    this.setState({
      intervalId,
    });
  }

  getPercentageTimeLeft() {
    const {
      stateMinutes,
      stateSeconds,
    } = this.state;

    const {
      limit
    } = this.props;

    return getPercentageTimeLeft(stateMinutes, stateSeconds, limit);
    console.log('getPercentageTimeLeft');
  }

  render() {
    const {
       text,
     } = this.state;


    return (
      <div>
        <div>
          <div className="Timer" onClick={() => this.timer()}>
          <img className="Timer-img" src="http://barkpost-assets.s3.amazonaws.com/wp-content/uploads/2013/11/3dDoge.gif" />
            <div className="Timer-progress">
              <CircularProgressbar
                percentage={this.getPercentageTimeLeft()}
                textForPercentage={() => text}
              />
            </div>
          </div>

          <h3>{text}</h3>
          <Button onClick={() => this.reset()}>
            restart
          </Button>
          <Button onClick={() => this.stopToCount()}>
            reset
          </Button>
          <Button onClick={() => this.timer()}>
            start
          </Button>
        </div>
      </div>
    );
  }
}

export default StopWatch;