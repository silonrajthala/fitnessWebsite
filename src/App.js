import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import '../src/App.css'
import Program from './Components/Program'
import About from './Components/About'
import Service from './Components/Service'
import Community from './Components/Community'

class App extends Component {
  render() {
    return (
      <div id='app'>
        <NavBar />
        <section>
          <Home />
        </section>
        <section>
          <Program />
        </section>
        <section>
          <About />
        </section>
        <section>
          <Service />
        </section>
        <section>
          <Community />
        </section>
        <footer>
          Copyright XXXX. All rights Reserved
        </footer>
      </div>


    )
  }
}

export default App