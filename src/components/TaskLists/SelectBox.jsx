import React, { Component } from 'react'
import './style.css'

export default class SelectBox extends Component {
  render() {
    const selectBoxStyle = {
        padding: '10px',
        width: '200px',
        borderRadius: '10px'
    }
    const { tasks } = this.props
    return (

      <div className='select--box'>
        <select style={selectBoxStyle} onChange={this.props.handleSelect}>
            <option value="all">All - {tasks.length}</option>
            <option value="completed">Completed - {tasks.filter( e => e.isCompleted).length}</option>
            <option value="incomplete">Incomplete - {tasks.filter( e => !e.isCompleted).length}</option>
        </select>
      </div>
    )
  }
}
