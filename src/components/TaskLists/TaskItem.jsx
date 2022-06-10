import React, { Component } from 'react'
import HandleButton from './HandleButton'
import './style.css'

export default class TaskItem extends Component {
  render() {
    let isCompleted = this.props.item.isCompleted;
    
    let taskStyle = {
      margin: '0 10px',
      fontSize: '20px',
      color: isCompleted?'#ccc':'orange',
      textDecoration: isCompleted?'line-through':'none',
    }

    return (
      <div className='task-lists'>
        <span style={taskStyle}>
          {this.props.item.todo}
        </span>
        <div style={{display:'flex'}}>
          <HandleButton btn='&#x02713;' 
                        style={{color:'greenyellow'}}
                        handleClick={this.props.handleClickCompleted}
          />
          <HandleButton btn='&#x02717;'
                        style={{color:'red'}}
                        handleClick={this.props.handleClickDelete}
          />
        </div>
      </div>
      
    )
  }
}
