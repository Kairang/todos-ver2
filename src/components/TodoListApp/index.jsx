import React, { Component } from 'react'
import FormInput from '../TaskInput/FormInput'
import TaskLists from '../TaskLists/TaskLists'


export default class TodoListApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taskLists: []
    }
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
    let currentTaskLists = this.state.taskLists
    currentTaskLists.splice(index, 1)
    this.setState({
      taskLists: currentTaskLists,
    })
  }

  render() {
    const { taskLists } = this.state
    return (
      <>
        <h1>TO DO LIST APPLICATION</h1>
        <FormInput addNewTask={this.addNewTask}/>
        <TaskLists tasks={taskLists}
                   deleteTask={this.deleteTask}
                   completedTask={this.completedTask}
        />
      </>
    )
  }
}
