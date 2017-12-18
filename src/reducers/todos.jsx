import * as actions from '../constants/Actions';
import {addTask, completeTask, deleteTask, turnOnTask, turnOffTask} from '../actions/TodoActions';
import {generateUniqueID, changeIDOrder, generateRandomHex} from '../core';

const initialState = {
  order: [],
  todos: [

  ],
  timer: [0, 0],
  color: ""
}

export default function todos(state = initialState, action) {
  switch (action.type) {

    case actions.ADD_TASK:
      const newID = generateUniqueID(state.todos);
      return {
        ...state,
        order: state.order.concat(newID),
        todos: state.todos.concat({
          id: newID,
          text: action.text,
          completed: false,
          color: generateRandomHex()
        })
      }
    case actions.DELETE_TASK:
      return {
        ...state,
        order: state.order.filter(id => id !== action.id),
        todos: state.todos.filter(todo => todo['id'] !== action.id)
      }
    case actions.TOGGLE_COMPLETE_TASK:
      let tmpTodos = state.todos
      tmpTodos[tmpTodos.findIndex(todo => todo['id'] == action.id)]['completed'] = !tmpTodos[tmpTodos.findIndex(todo => todo['id'] == action.id)]['completed']
      return {
        ...state,
        todos: tmpTodos
      }
    case actions.TURN_ON_TIMER:
      if(action.id in state.order && state.todos.filter(todo => todo['id'] == action.id).length != 0 && state.timer[0] != action.id)
        return {
          ...state,
          timer: [action.id, +new Date()]
        }

      return state
    case actions.TURN_OFF_TIMER:
      return {
        ...state,
        timer: [0, 0]
      }
    case actions.CHANGE_TASK_ORDER:
      return {
        ...state,
        order: changeIDOrder(state.order, action.old_index, action.new_index)
      }
    default:
      return state

  }
}
