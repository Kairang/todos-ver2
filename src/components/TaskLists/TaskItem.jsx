import React, { Component } from 'react'
import HandleButton from './HandleButton'
import './style.css'

export default class TaskItem extends Component {
  render() {
    let { item, handleClickCompleted, handleClickDelete} = this.props

    let isCompleted = item.isCompleted;
    
    let taskStyle = {
      margin: '0 10px',
      fontSize: '20px',
      color: isCompleted?'#ccc':'orange',
      textDecoration: isCompleted?'line-through':'none',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }

    return (
      <div className='task-lists'>
        <p style={taskStyle}>
          {item.todo}
        </p>
        <div style={{display:'flex'}}>
          <HandleButton btn='&#x02713;' 
                        style={{color: isCompleted?'#666':'greenyellow'}}
                        handleClick={handleClickCompleted}
          />
          <HandleButton btn='&#x02717;'
                        style={{color:'red'}}
                        handleClick={handleClickDelete}
          />
        </div>
      </div>
      
    )
  }
}
