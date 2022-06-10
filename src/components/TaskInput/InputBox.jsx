import React, { Component } from 'react'
import './style.css'

export default class InputBox extends Component {
  render() {
    return (
      <input type="text"
             placeholder='Add new task here!'
             onChange={this.props.onChange}
             value={this.props.value}
      />
    )
  }
}
