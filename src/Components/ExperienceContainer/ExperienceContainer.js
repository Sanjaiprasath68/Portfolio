import React from 'react'
import "./ExperienceContainer.css"
import Experience from '../Experiencebox/Experience'
import { Element} from 'react-scroll'

const ExperienceContainer = () => {
  return (
    <Element className="experienceContainer" id="exp">
        <h1>Experience</h1>
        <div className='experienceContainer_info'>
            {/* <Experience number="+10" title="Clients"/> */}
            <Experience number="5+" title="projects" style={{backgroundColor:"#f64c08"}}/>
            <Experience number="3 months" title="Experience"/>
            {/* <Experience number="60000+" title="Students got tranined"/> */}
        </div>

    </Element>
  )
}

export default ExperienceContainer
