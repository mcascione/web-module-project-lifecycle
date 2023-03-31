import React from 'react';
import TodoList from './Todo';
import Form from './Form';

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    }
  }
  render() {
    return (
      <>
      <TodoList />
      <Form />
        <button>Remove Completed Tasks</button>
      </>
    )
  }
}
