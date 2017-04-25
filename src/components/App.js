import React, { Component } from 'react'
import Rrouter from './Rrouter'
import { Image } from 'react-bootstrap'
import '../styles/grid.scss'

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      location: '',
      imageURL: '',
      bio: ''
    }
  }

  componentDidMount () {
    window.fetch('https://api.github.com/users/bdog72').then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({name: data.name, location: data.location, imageURL: data.avatar_url, bio: data.bio})
    })
  }

  render () {
    return <div className='wrapper'>
      <div className='box header'>
        <h1>{this.state.name}</h1>
        <Image src={this.state.imageURL} responsive circle />
        <p>{this.state.bio}</p>
        <p>I'm a Jr. Front End Engineer in {this.state.location}</p>
      </div>
      <div className='box sidebarL'>
        Sidebar-left
      </div>
      <div className='box content'>
        <a href='https://twitter.com/Bdoggy72'>
          <Image src='https://cdn1.iconfinder.com/data/icons/social-media-icon-1/112/twitter-128.png' responsive />
        </a>
        <p>My Current GitHub Chart</p>
        <a href='https://github.com/bdog72'>
          <Image src='http://ghchart.rshah.org/bdog72' alt='Brians GitHub chart' responsive />
        </a>
      </div>
      <div className='sidebarR'>
        <Rrouter />
      </div>
      <div className='box footer'>
        <p>813-505-4733</p>
        <p>high5bri&#64;hotmail.com</p>
        <p>Made With &hearts; From What I Learned At The Iron Yard</p>
      </div>
    </div>
  }
}
