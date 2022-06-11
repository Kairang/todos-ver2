import React, { Component } from 'react'
import './style.css'

export default class InputBox extends Component {
  render() {
    let { onChange, value, onEnterPress } = this.props
    return (
      <input type="text"
             placeholder='Add new task here!'
             onChange={onChange}
             value={value}
             onKeyDown={onEnterPress}
      />
    )
  }
}
