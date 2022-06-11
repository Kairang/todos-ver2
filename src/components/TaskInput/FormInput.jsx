import React, { Component } from 'react'
import InputBox from './InputBox'
import AddButton from './AddButton'

export default class FormInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todo: ''
        }
        this.handleOnChange = this.handleOnChange.bind(this)
    }

    handleOnChange(todo) {
        let taskInput = todo.target.value
        this.setState({
            todo: taskInput
        })
    }

    handleOnClick = () => {
        if(!this.state.todo.trim()) {
            alert('Please enter a new task!!');
            this.setState({
                todo: ''
            })
            return;
        }
        let task = {
            id: new Date().getTime(),
            todo: this.state.todo,
            isCompleted: false,
        };
        this.props.addNewTask(task);
        this.setState({
            todo: ''
        })
    }

    handleOnEnterDown = (e) => {
        if (e.code === 'Enter') {
            if(!this.state.todo.trim()) {
                alert('Please enter a new task!!');
                this.setState({
                    todo: ''
                })
                return;
            }
            else {
                let task = {
                    id: new Date().getTime(),
                    todo: this.state.todo,
                    isCompleted: false,
                };
                this.props.addNewTask(task);
                this.setState({
                    todo: ''
                })
            }
        }
    }
  render() {
    
    return (
      <div style={{marginBottom: '50px'}}>
          <InputBox onChange={this.handleOnChange}
                    value={this.state.todo}
                    onEnterPress={this.handleOnEnterDown}
          />
          <AddButton onClick={this.handleOnClick}/>
      </div>
    )
  }
}
