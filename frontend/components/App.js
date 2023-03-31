import React from 'react';
import TodoList from './Todo';
import Form from './Form';
import axios from 'axios';

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

  fetchAllTodos = () => {
    axios.get(URL)
      .then(res => {
        this.setState( {...this.state, todos: res.data.data} )
      })
      .catch(err => {
        debugger
      })
  }

  componentDidMount(){
    this.fetchAllTodos();
    console.log(URL.message);
  }

  render() {
    return (
      <>
      {this.state.todos.map(td => {
          return (<div key={td.id}>{td.name}</div>)
        })}
      <TodoList />
      <Form />
        <button>Remove Completed Tasks</button>
      </>
    )
  }
}
