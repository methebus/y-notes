import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import TodoItem from './TodoItem.jsx'
import * as TodoActions from '../actions/TodoActions'
import mapValues from 'lodash.mapvalues'

class TodoList extends Component {
  render () {
    return (
      <ul className={"todo-list"}>
        {
          this.props.state.order.map((todoId, key) =>
            <TodoItem key={key}
                      id={todoId}
                      text={this.props.state.todos.find(todo => todo.id == todoId).text}
                      completed={this.props.state.todos.find(todo => todo.id == todoId).completed}
                      {...this.props.actions} />
          )
        }
      </ul>
    );
  }

}

function mapStateToProps(state) {
  return {
      state: state.todos
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(TodoActions, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(TodoList);
