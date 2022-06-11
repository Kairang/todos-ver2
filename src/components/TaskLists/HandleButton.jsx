import React, { Component } from 'react'
import './style.css'

export default class HandleButton extends Component {
  render() {
    const { btn, style, handleClick } = this.props
    return (
      <>
        <div className='btn'>
            <span onClick={handleClick} style={style}>{btn}</span>
        </div>
      </>
    )
  }
}
