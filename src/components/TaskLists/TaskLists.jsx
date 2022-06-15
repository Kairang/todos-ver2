import React, { Component } from 'react'
import TaskItem from './TaskItem'
import SelectBox from './SelectBox'
import Panigation from '../Pagination'

export default class TaskLists extends Component {
  constructor(props){
      super(props)
      this.props = props
  }
  
  handleClickCompleted = (task) => {
    task.isCompleted = true;
    this.props.completedTask(this.props.tasks)
  }

  handleClickDelete = (index) => {
    this.props.deleteTask(index)
  }

  handleSelect = (e) => {
    const option = e.target.value
    this.props.selectOption(option)
  }

  getTaskInCurrentPage(limit, tasks) {
    const { currentPage } = this.props
    const startIndex = currentPage * limit - limit
    return [...tasks.slice(startIndex, startIndex + limit)]
  }

  render() {
    const { tasks, option, currentPage, handleSetCurrentPage } = this.props
    const limit = 6;
    let taskLists = []

    if (option === 'all') {
      taskLists = tasks
    } else if (option === 'completed') {
      taskLists = tasks.filter( e => e.isCompleted)
    } else { taskLists = tasks.filter( e => !e.isCompleted)}
    
    return (
      <div>
          <SelectBox tasks={tasks} handleSelect={(e) => this.handleSelect(e)}/>
          {this.getTaskInCurrentPage(limit, taskLists).map( (task, index) => 
            (<TaskItem key={task.id} item={task} id={index} limit={limit} page={currentPage}
                        handleClickCompleted={() => this.handleClickCompleted(task)}
                        handleClickDelete={() => this.handleClickDelete(index)}
          />))}
          <Panigation
            currentPage={currentPage}
            taskLists={taskLists}
            limit={limit}
            handleSetCurrentPage={handleSetCurrentPage}
          />
      </div>
    )
  }
}
