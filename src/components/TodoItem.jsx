import React, {Component, PropTypes} from 'react';

import {connect} from 'react-redux'

import {deleteTask, toggleCompleteTask, turnOnTask, turnOffTask} from '../actions/TodoActions'

let createHandlers = function(dispatch) {
  let onDelete = function(data) {
    dispatch(deleteTask(data))
  },  onToggleComplete = function(data) {
    dispatch(toggleCompleteTask(data))
  }

  return {
    onDelete,
    onToggleComplete
  }
}

class TodoItem extends Component {
  constructor(props) {
    super(props)

    this.handleDelete = this.handleDelete.bind(this)
    this.handleToggleComplete = this.handleToggleComplete.bind(this)
    this.handlers = createHandlers(this.props.dispatch)
  }

  handleDelete(e) {
    this.handlers.onDelete(this.props.id)
    e.preventDefault()
  }

  handleToggleComplete(e) {
  this.handlers.onToggleComplete(this.props.id)
    e.preventDefault()
  }

  render() {
    return (
      <li className={"todo-item" + (this.props.completed? " completed": "")}>
        <span className={"todo-item-color"} style={{backgroundColor: this.props.color}} />
        {this.props.text}
        <a href="#" className={"todo-item-del"} onClick={this.handleDelete} />
        <a href="#" className={"todo-item-toggle" + (this.props.completed? " uncomplete": " complete")} onClick={this.handleToggleComplete} />
      </li>
    )
  }
}

export default connect()(TodoItem)
