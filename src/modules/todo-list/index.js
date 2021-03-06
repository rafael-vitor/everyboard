import React, { Component } from 'react';
import { Input, Card, Checkbox, Button } from 'semantic-ui-react';
import uuidv4 from 'uuid/v4';
import './style.css';

class TodoList extends Component {
  state = {
    input: '',
    todoList: [],
    show: false,
  }

  handleChange = (_, { value }) => this.setState({ input: value });

  handleSubmit = (e) => {
    if (e.key === 'Enter') {
      const { todoList, input } = this.state;
      this.setState({
        input: '',
        todoList: [
          ...todoList,
          {
            id: uuidv4(),
            input,
            checked: false,
          },
        ]
      });
    }
  }

  handleCheck = (_, x) => {
    this.setState({
      todoList: this.state.todoList.map(todo => todo.id === x.id ?
        { ...todo, checked: !todo.checked } :
        todo
      )
    });
  }

  render() {
    const { input, show, todoList } = this.state;
    return (
      <div className="TodoList">
        <Input
          fluid
          icon="plus"
          iconPosition="left"
          placeholder="Add a to-do..."
          size="big"
          value={input}
          onKeyPress={this.handleSubmit}
          onChange={this.handleChange}
          className="TodoList-input"
        />
        {todoList
          .filter(todo => !todo.checked)
          .map(todo => (
            <Card fluid key={todo.id}>
              <Card.Content>
                <Checkbox
                  label={todo.input}
                  checked={todo.checked}
                  className={todo.checked ? "TodoList-check" : ""}
                  onClick={this.handleCheck}
                  id={todo.id}
                />
              </Card.Content>
            </Card>
          ))}
        <Button
          content="SHOW COMPLETED TO-DOS"
          compact
          size="tiny"
          secondary
          onClick={() => this.setState({ show: !show })}
        />
        {
          show
            ?
            todoList
              .filter(todo => todo.checked)
              .map(todo => (
                <Card
                  fluid
                  key={todo.id}
                >
                  <Card.Content>
                    <Checkbox
                      label={todo.input}
                      checked={todo.checked}
                      className={todo.checked ? "TodoList-check" : ""}
                      onClick={this.handleCheck}
                      id={todo.id}
                    />
                  </Card.Content>
                </Card>
              ))
            :
            <div />
        }
      </div>
    )
  }
}

export default TodoList;
