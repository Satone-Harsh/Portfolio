import React from 'react'
import Topbar from './components/topbar/Topbar'
import Intro from './components/intro/Intro'
import Work from './components/work/Work'
import About from './components/About/About'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <div className='app'>
      <Topbar/>
      <Intro/>
      <Work/>
      <About/>
      <Contact/>
    </div>
  )
}

export default App