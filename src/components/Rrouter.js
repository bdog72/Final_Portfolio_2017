import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
export default class Rrouter extends Component {
  render () {
    const Ex1 = () => (
      <div>
        <h2 className='entities'>&spades;</h2>
      </div>
    )
    const Ex2 = () => (
      <div>
        <h2 className='entities'>&clubs;</h2>
      </div>
    )
    const Ex3 = () => (
      <div>
        <h2 className='entities2'>&hearts;</h2>
      </div>
    )
    const Ex4 = () => (
      <div>
        <h2 className='entities'>&diams;</h2>
      </div>
    )

    const BasicE = () => (
      <Router>
        <div>
          <ul>
            <li><Link to='/'><h2 className='entities1'>SPADES</h2></Link></li>
            <li><Link to='/example2'><h2 className='entities1'>CLUBS</h2></Link></li>
            <li><Link to='/example3'><h2 className='entities1'>HEARTS</h2></Link></li>
            <li><Link to='/example4'><h2 className='entities1'>DIAMONDS</h2></Link></li>
          </ul>
          <hr />
          <Route exact path='/' component={Ex1} />
          <Route path='/example2' component={Ex2} />
          <Route path='/example3' component={Ex3} />
          <Route path='/example4' component={Ex4} />
        </div>
      </Router>
    )

    return <div>
      <BasicE />
    </div>
  }
}
