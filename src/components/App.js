import React, { Component } from 'react'
import '../styles/grid.scss'
class App extends Component {
  render () {
    return <div className='wrapper'>
      <div className='box header'>
        Head
      </div>
      <div className='box sidebarL'>
        Sidebar-left
      </div>
      <div className='box content'>
        Content
      </div>
      <div className='sidebarR'>
        Sidebar-right
      </div>
      <div className='box footer'>
        Footer
      </div>
    </div>
  }
}

export default App
