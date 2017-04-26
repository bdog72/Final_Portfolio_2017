import React, { Component } from 'react'
import Rrouter from './Rrouter'
// import Grid from './Grid'
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
        <div className='image'>
          <Image src={this.state.imageURL} responsive circle />
        </div>
        <p>{this.state.bio}</p>
        <p>I'm a Jr. Front End Engineer in {this.state.location}</p>
      </div>
      <div className='box sidebarL'>
        <p>Some Of The Skills I Learned At <br /> <img src='https://www.theironyard.com/etc/designs/theironyard/icons/iron-yard-logo.svg' alt='' /></p>
        <ul className='skills1'>
          <li><img src='https://cdn1.iconfinder.com/data/icons/line-essentials-64/20/3155-128.png' alt='' /></li>
          <li><img src='https://cdn0.iconfinder.com/data/icons/website-kit-2/512/icon_287-128.png' alt='' /></li>
        </ul>
        <ul className='skills2'>
          <li><img src='https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/boostrap-128.png' responsive /></li>
          <li><img src='https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/js-128.png' alt='' responsive /></li>
        </ul>
        <ul className='skills3'>
          <li><img src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-128.png' alt='' /></li>
          <li><img src='https://cdn0.iconfinder.com/data/icons/free_windows7_icons_emoticons/64/clown.png' /></li>
        </ul>
      </div>
      <div className='box content'>
        <h2>Follow Me On Twitter</h2>
        <div className='tweet'>
          <a href='https://twitter.com/Bdoggy72'>
            <Image src='https://cdn1.iconfinder.com/data/icons/social-media-icon-1/112/twitter-128.png' responsive />
          </a>
        </div>
        <h2>My Current GitHub Chart</h2>
        <div className='git'>
          <a href='https://github.com/bdog72'>
            <Image src='http://ghchart.rshah.org/bdog72' alt='Brians GitHub chart' responsive />
          </a>
        </div>
        {/* <Grid /> */}
      </div>
      <div className='sidebarR'>
        <h2>React Router</h2>
        <Rrouter />
      </div>
      <div className='box footer'>
        <h2>813-505-4733</h2>
        <h2>high5bri&#64;hotmail.com</h2>
        <h2>Made With &hearts; From What I Learned At The Iron Yard</h2>
      </div>
    </div>
  }
}
