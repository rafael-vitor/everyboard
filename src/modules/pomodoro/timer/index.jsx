/* @flow */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { fillTextWithFormat, getPercentageTimeLeft } from './utils';
import { Button } from 'semantic-ui-react';
import CircularProgressbar from 'react-circular-progressbar';
import autoBind from 'react-autobind';

import './style.css';

const sessionStateDict = {
  waiting: {
    label: 'Start',
    buttonColor: 'green',
  },
  working: {
    label: 'Stop',
    buttonColor: 'red',
  },
  resting: {
    label: 'Skip',
    buttonColor: 'red',
  }
};

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

class Timer extends Component {
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
      limit,
     } = props;

    const text: string = fillTextWithFormat(minutes, seconds);

    this.state = {
      text,
      stateMinutes: minutes,
      stateSeconds: seconds,
      intervalId: 0,
      sessionState: 'waiting',
      numberOfSessions: 0,
      stateLimit: limit || '25:00',
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
      withLoop,
      onCallback,
     } = this.props;

    const {
      stateLimit,
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

    if (stateLimit === text) {
      this.stopToCount();
      if (withLoop) {
        this.timer();
      }
      if (typeof onCallback === 'function') {
        this.setState({
          sessionState: 'resting',
          stateLimit: '05:00',
        }, this.timer());
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
      stateLimit,
      stateMinutes,
      stateSeconds,
    } = this.state;


    return getPercentageTimeLeft(stateMinutes, stateSeconds, stateLimit);
    console.log('getPercentageTimeLeft');
  }

  click() {
    const { sessionState } = this.state;
    if (this.state.sessionState === 'waiting') {
      this.setState({
        sessionState: 'working',
      }, this.timer())
    } else if (this.state.sessionState === 'working') {
      this.setState({
        sessionState: 'waiting',
      }, this.stopToCount())
    } else if (this.state.sessionState === 'resting') {
      this.setState({
        sessionState: 'waiting',
        stateLimit: '25:00',
      }, this.stopToCount())
    }
  }

  render() {
    const {
       text, sessionState,
     } = this.state;

    return (
      <div>
        <div>
          <div className="Timer" onClick={() => this.timer()}>
            <div className={sessionState === 'resting' ? 'Timer--resting' : ''}>
              <CircularProgressbar
                percentage={this.getPercentageTimeLeft()}
                textForPercentage={() => text}
              />
            </div>
          </div>
          <div className="Timer-button">
            <Button
              onClick={() => this.click()}
              color={sessionStateDict[sessionState].buttonColor}
              basic={sessionState === 'resting'}
            >
              {sessionStateDict[sessionState].label}
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;