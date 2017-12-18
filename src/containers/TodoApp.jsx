import React, {Component} from 'react'
import TodoList from '../components/TodoList.jsx'
import TodoForm from '../components/TodoForm.jsx'

export default class TodoApp extends Component {
  render() {
    return (
      <div className={"l-main"}>
        <div className={"todo-app"}>
          <TodoForm/>
          <TodoList/>
        </div>
      </div>
    );
  }
}
