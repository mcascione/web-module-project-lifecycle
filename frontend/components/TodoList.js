import React from 'react'l
import Todos from './Todo';

export default class TodoList extends React.Component {
  render() {
    return (
      <>
        <h1>Todos:</h1>
        <ul>
          <Todos />
        </ul>
      </>
    )
  }
}
