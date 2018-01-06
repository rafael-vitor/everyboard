import React, { Component } from 'react';
import { Form, Card, Icon, Button } from 'semantic-ui-react';
import './style.css';

const options = [
  {
    key: 'Every day',
    text: 'Every day',
    value: 'Every day',
    content: 'Every day',
  },
  {
    key: 'Every week',
    text: 'Every week',
    value: 'Every week',
    content: 'Every week',
  },
  {
    key: 'Every month',
    text: 'Every month',
    value: 'Every month',
    content: 'Every month',
  },
]

const defaultValue = {
  remind: '',
  date: '',
  hour: '',
  when: '',
};

class Reminder extends Component {
  state = {
    data: defaultValue,
    reminders: [],
  }

  handleChange = (e, { name, value }) => this.setState({
    data: {
      ...this.state.data,
      [name]: value
    }
  });

  handleSubmit = () => this.setState({
    data: defaultValue,
    reminders: [...this.state.reminders, this.state.data]
  });

  render() {
    const { remind, date, hour, when } = this.state.data;
    const { reminders } = this.state;

    return (
      <div className="Reminder">
        <Card fluid>
          <Card.Content>
            <Form onSubmit={this.handleSubmit}>
              <Form.Input
                required
                name="remind"
                icon="alarm outline"
                label="Remind me"
                placeholder="Ex: drink water"
                iconPosition="left"
                onChange={this.handleChange}
                value={remind}
              />
              <Form.Group widths='equal'>
                <Form.Input
                  required
                  name="date"
                  icon="calendar"
                  iconPosition="left"
                  label="Date"
                  placeholder="Ex: 08/01/2018"
                  onChange={this.handleChange}
                  value={date}
                />
                <Form.Input
                  required
                  name="hour"
                  label="Hour"
                  placeholder="Ex: 08:00"
                  iconPosition="left"
                  icon="clock"
                  onChange={this.handleChange}
                  value={hour}
                />
                <Form.Select
                  name="when"
                  label="When"
                  placeholder="Ex: Every day"
                  options={options}
                  onChange={this.handleChange}
                  value={when}
                />
              </Form.Group>
              <Form.Button content="Remind me!" secondary fluid />
            </Form>

          </Card.Content>
        </Card>

        {
          reminders.map((data, idx) => (
            <Card fluid color="teal" key={idx}>
              <Card.Content className="Reminder-card">
                <div className="Reminder-card-value">
                  Remind me, {data.remind} in {data.date} at {data.hour} {data.when}.
                </div>
                <Button className="Reminder-card-actions" animated="vertical" compact>
                  <Button.Content hidden>Edit</Button.Content>
                  <Button.Content visible>
                    <Icon name="edit" size="large" />
                  </Button.Content>
                </Button>
                <Button className="Reminder-card-actions" animated="vertical" compact>
                  <Button.Content hidden>Delete</Button.Content>
                  <Button.Content visible>
                    <Icon name="trash outline" size="large" />
                  </Button.Content>
                </Button>
              </Card.Content>
            </Card>
          ))
        }
      </div >
    )
  }

}

export default Reminder;
