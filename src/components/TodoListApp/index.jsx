import React, { Component } from 'react'
import FormInput from '../TaskInput/FormInput'
import TaskLists from '../TaskLists/TaskLists'
// import Panigation from '../Pagination'


export default class TodoListApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taskLists: JSON.parse(localStorage.getItem('Todo List')) || [],
      currentPage: 1,
    }
  }

  addToLocalStorage = (todo) => {
    localStorage.setItem('Todo List', JSON.stringify(todo))
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

  getTaskInCurrentPage() {
    const startIndex = this.state.currentPage * 5 - 5
    return [...this.state.taskLists.slice(startIndex, startIndex + 5)]
  }

  handleSetCurrentPage(page) {
    this.setState({
      currentPage: page
    })
  }

  render() {
    const { taskLists } = this.state
    const { title } = this.props
    this.addToLocalStorage(taskLists)
    return (
      <>
        <h1 style={{color:'white'}}>{title}</h1>
        <FormInput addNewTask={this.addNewTask}/>
        <TaskLists tasks={taskLists}
                   deleteTask={this.deleteTask}
                   completedTask={this.completedTask}
        />
        {/* <Panigation
            currentPage={currentPage}
            taskLists={taskLists}
            handleSetCurrentPage={this.handleSetCurrentPage}
        /> */}
      </>
    )
  }
}
