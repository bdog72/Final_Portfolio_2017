import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '../styles/grid1.scss'
export default class Rrouter extends Component {
  render () {
    const Ex1 = () => (
      <div>
        <CssGrid />
      </div>
    )
    const Ex2 = () => (
      <div>
        <CssGrid1 />
      </div>
    )
    const Ex3 = () => (
      <div>
        <h2>&hearts;</h2>
      </div>
    )
    const Ex4 = () => (
      <div>
        <h2>&diams;</h2>
      </div>
    )

    const BasicE = () => (
      <Router>
        <div>
          <ul>
            <li><Link to='/'><h2>Css Grid Example 1</h2></Link></li>
            <li><Link to='/example2'><h2>Css Grid Example 2</h2></Link></li>
            <li><Link to='/example3'><h2>HEARTS</h2></Link></li>
            <li><Link to='/example4'><h2>DIAMONDS</h2></Link></li>
          </ul>
          <hr />
          <Route exact path='/' component={Ex1} />
          <Route path='/example2' component={Ex2} />
          <Route path='/example3' component={Ex3} />
          <Route path='/example4' component={Ex4} />
        </div>
      </Router>
    )

    const CssGrid = () => (
      <div className='wrapper1'>
        <div className='box a'>A</div>
        <div className='box b'>B</div>
        <div className='box c'>C</div>
        <div className='box d'>D</div>
      </div>
    )

    const CssGrid1 = () => (
      <div className='wrapper2'>
        <div className='box1 header1'>Header</div>
        <div className='box1 sidebar'>Side</div>
        <div className='box1 content1'>Content</div>
      </div>
    )

    return <div>
      <BasicE />
    </div>
  }
}
