import React, {Component} from 'react'
import {connect} from 'react-redux'

import {addTask} from '../actions/TodoActions'

let createHandlers = function(dispatch) {
  let onSubmit = function(data) {
    dispatch(addTask(data))
  }

  return {
    onSubmit
  }
}

class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {value: '', stick: false}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
    this.submitHandler = createHandlers(this.props.dispatch).onSubmit
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(e) {
    this.setState({stick: (document.documentElement.scrollTop || document.body.scrollTop) > 80})
  }

  handleChange(e) {
    this.setState({value: e.target.value})
  }

  handleSubmit(e) {
    if(this.state.value.trim() != '') {
      this.submitHandler(this.state.value.trim())
      this.setState({value: ''})
    }
    e.preventDefault()
  }

  render () {
    return (
      <form className={"todo-form" + (this.state.stick? " fixed": "")} onSubmit={this.handleSubmit}>
        <input type="text" className={"todo-form-input"} value={this.state.value} onChange={this.handleChange} placeholder="What you are going to do?"/>
        <input type="submit" className={"todo-form-submit"} value="Add todo!"/>
      </form>
    )
  }
}

export default connect()(TodoForm)
