import React from 'react'
import "./Contact.css"
import { IconButton } from '@mui/material'
import { Element } from 'react-scroll'
import { Facebook,Instagram,LinkedIn } from '@mui/icons-material'

const Contact = () => {
  return (
    <Element className="contact" id="contact">
        <h1>Contact</h1>
        <div className="contact_container">
            <p className='email'>
                Email : <span>psanjai767@gmail.com</span>
            </p>
            <p>
                Github Username : <a href='https://github.com/Sanjai767?tab=repositories'><span>Sanjai767</span></a>
            </p>
            <p>
                LinkedIn : <a href='https://www.linkedin.com/in/sanjaiprasath68'><span>sanjaiprasath68</span></a>
            </p>
            <p>
                Mobile Number : <span>9791619570</span>
            </p>
            <div className="contact_icons">
                <a href="www.LinkedIn.com">
                <IconButton>
                    <LinkedIn />
                </IconButton>
                </a>
                <a href="www.Facebook.com">
                <IconButton>
                    <Facebook />
                </IconButton>
                </a>
                <a href="www.Instagram.com">
                <IconButton>
                    < Instagram/>
                </IconButton>
                </a>
            </div>
        </div>
    </Element>
  )
}

export default Contact
