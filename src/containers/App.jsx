import React, {Component} from 'react'
import {combineReducers, createStore} from 'redux'
import {Provider} from 'react-redux'

import TodoApp from './TodoApp.jsx'
import * as reducers from '../reducers'

import '../stylesheets/index.scss'

import {addTask, deleteTask, toggleCompleteTask, turnOnTask, turnOffTask, changeTaskOrder} from '../actions/TodoActions'

const reducer = combineReducers(reducers),
      store = createStore(reducer)

export default class App extends Component {
  render() {
    return (
      <div className={"l-page"}>
        <div className={"l-header"}>
          <div className={"header-content"}>
            <img src="images/logo.svg" className="header-logo"/>
            <span className={"header-title"}>Y·Productive</span>
          </div>
        </div>
        <Provider store={store}>
          <TodoApp />
        </Provider>
      </div>
    );
  }
}
