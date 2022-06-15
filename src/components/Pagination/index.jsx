import React, { Component } from 'react'
import './style.css'

export default class Panigation extends Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    const { currentPage, taskLists, limit, handleSetCurrentPage } = this.props
    const endPage = Math.ceil(taskLists.length / limit)

    return (
      <div className='panigation-wrapper' style={{display: endPage>1? 'flex' : 'none'}}>
        <button disabled={currentPage <= 1} onClick={() => handleSetCurrentPage(currentPage-1)}>
          Prev
        </button>  
        <span>Page - {currentPage}</span>
        <button disabled={currentPage >= endPage} onClick={() => handleSetCurrentPage(currentPage +1)}>
          Next
        </button>  
      </div >
    )
  } 
}