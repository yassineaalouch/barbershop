import { useState } from 'react'
import About from './About.jsx'
import Team from './Team.jsx'
import Services from './Services.jsx'
import Schedule from './Schedule.jsx'
import Footer from './Footer.jsx'
import Calendar from './Calendar.jsx'

function App() {
  const [language, setLanguage] = useState('EN');

  return (
      <div>
        <About language={language} setLanguage={setLanguage}/>
        <Team language={language}/>
        <Services language={language}/>
        <Calendar language={language}/>
        <Schedule language={language}/>
        <Footer />
      </div>
  )
}

export default App
