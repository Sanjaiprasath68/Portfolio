import React from 'react'
import { Link } from 'react-scroll'
import "./TopContent.css"



const TopContent = () => {
    const config = {
    link: "https://github.com/Sanjai767?tab=repositories"
  }
  return (
    <div className='topcontent'>
        <div className='topcontent_container'>
            <h1>P.Sanjai</h1>
            <p>A Professional Web Developer</p>
            <a href={config.link}><button className="topcontent_downloadButton">GitHub</button></a>
            <Link to="projects" smooth={true} duration={500}>
                <button className='topcontent_workButton'>My works</button>
            </Link>
        </div>
      
    </div>
  )
}

export default TopContent
