import React, { Component } from 'react'
import './style.css'

export default class HandleButton extends Component {
  render() {
    const { btn, style } = this.props
    return (
      <>
        <div className='btn'>
            <span onClick={this.props.handleClick} style={style}>{btn}</span>
        </div>
      </>
    )
  }
}
