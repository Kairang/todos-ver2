import React, { Component } from 'react'
import FormInput from '../TaskInput/FormInput'
import TaskLists from '../TaskLists/TaskLists'

export default class TodoListApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taskLists: JSON.parse(localStorage.getItem('Todo List')) || [],
      selectOption: 'all',
      currentPage: 1,
    }
  }

  addToLocalStorage = (todos) => {
    localStorage.setItem('Todo List', JSON.stringify(todos))
  }

  addNewTask = (todo) => {
    this.setState({
      taskLists: [todo, ...this.state.taskLists]
    })
  }
  
  completedTask = (tasks) => {
    this.setState({
      taskLists: tasks
    })
  }
  
  deleteTask = (index) => {
    let taskLists = this.state.taskLists
    taskLists.splice(index, 1)
    this.setState({
      taskLists: taskLists,
    })
  }

  selectOption = (option) => {
    this.setState({
      currentPage: 1,
      selectOption: option,
    })
  }

  handleSetCurrentPage = (newPage) => {
    this.setState({
      currentPage: newPage
    })
  }

  render() {
    const { taskLists, selectOption, currentPage } = this.state
    const { title } = this.props
    this.addToLocalStorage(taskLists)

    return (
      <>
        <h1 style={{color:'white', paddingTop: '30px', margin:'0'}}>{title}</h1>
        <FormInput addNewTask={this.addNewTask} />
        <TaskLists tasks={taskLists}
                   option={selectOption}
                   currentPage={currentPage}
                   deleteTask={this.deleteTask}
                   completedTask={this.completedTask}
                   selectOption={this.selectOption}
                   handleSetCurrentPage={this.handleSetCurrentPage}
        />
      </>
    )
  }
}
