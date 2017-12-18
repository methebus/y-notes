import * as actions from '../constants/Actions';

export function addTask(text) {
  return {
    type: actions.ADD_TASK,
    text
  };
}

export function toggleCompleteTask(id) {
  return {
    type: actions.TOGGLE_COMPLETE_TASK,
    id
  };
}

export function deleteTask(id) {
  return {
    type: actions.DELETE_TASK,
    id
  };
}

export function turnOnTask(id) {
  return {
    type: actions.TURN_ON_TIMER,
    id
  };
}

export function turnOffTask() {
  return {
    type: actions.TURN_OFF_TIMER
  };
}

export function changeTaskOrder(old_index, new_index) {
  return {
    type: actions.CHANGE_TASK_ORDER,
    old_index,
    new_index
  };
}
