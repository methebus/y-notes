import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc'

import {changeTaskOrder} from '../actions/TodoActions'

import TodoItem from './TodoItem.jsx'
import * as TodoActions from '../actions/TodoActions'
import mapValues from 'lodash.mapvalues'

const SortableItem = SortableElement(({index, id, text, color, completed}) =>
  <TodoItem id={id}
    color={color}
    text={text}
    completed={completed} />
);

const SortableList = SortableContainer(({list, todos}) => {
  return (
    <ul className={"todo-list"}>
      {list.map((todoId, key) => (
        <SortableItem key={key} index={key} id={todoId} text={todos.find(todo => todo.id == todoId).text} color={todos.find(todo => todo.id == todoId).color} completed={todos.find(todo => todo.id == todoId).completed}/>
      ))}
    </ul>
  );
});

class SortableComponent extends Component {
  onSortEnd = ({oldIndex, newIndex}) => {
    this.props.moveHandler(oldIndex, newIndex)
  };
  render() {
    return <SortableList list={this.props.list} distance={10} lockAxis={"y"} todos={this.props.todos} onSortEnd={this.onSortEnd} />;
  }
}

class TodoList extends Component {
  render () {
    return <SortableComponent list={this.props.state.order} todos={this.props.state.todos} moveHandler={this.props.changeTaskOrder}/>
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
