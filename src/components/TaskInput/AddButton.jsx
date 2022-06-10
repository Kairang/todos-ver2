import React, { Component } from 'react'
import './style.css'

export default class AddButton extends Component {
  
  render() {
    return (
      <button onClick={this.props.onClick}>Add</button>
    )
  }
}
