import React, { Component } from 'react'
import TaskItem from './TaskItem'

export default class TaskLists extends Component {
  constructor(props){
      super(props)
      this.props = props
  }

  handleClickCompleted = (e) => {
    if (!e.isCompleted) {
      e.isCompleted =true;
    } else { e.isCompleted = false }
    this.props.completedTask(this.props.tasks)
  }

  handleClickDelete = (e) => {
    this.props.deleteTask(e)
  }

  render() {
    const { tasks } = this.props
    return (
      <div>
          {tasks.map( (task, index) => (<TaskItem key={index} item={task}
                    handleClickCompleted={() => this.handleClickCompleted(task)}
                    handleClickDelete={() => this.handleClickDelete(index)}
          />))}
      </div>
    )
  }
}
