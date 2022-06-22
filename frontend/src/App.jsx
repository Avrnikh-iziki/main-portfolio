import './app.scss'
import React, { useState } from 'react'
import Topbar from "./App/component/topbar/Topbar"
import Intro from "./App/component/intro/Intro"
import Portfolio from './App/component/portfolio/Portfolio'
import Work from "./App/component/work/Work"
import Contact from "./App/component/contact/Contact"
import Testimonias from "./App/component/testimonial/Testimonial"
import Menu from "./App/component/menu/Menu"
import { Data } from './data'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [phonemessage, sendphonemessge] = useState(null)
 

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} sendphonemessge={sendphonemessge} />
      <div className="section" >
        <Intro />
        <Portfolio Data={Data.portfolio}/>
        <Work work={Data.works} />
        <Testimonias testomonial={Data.testimonial} />
        <Contact company={Data.company}  sendphonemessge={sendphonemessge} phonemessage={phonemessage}  />
      </div>
    </div>
  );
}

export default App;
