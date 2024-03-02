import React from 'react'
import {Element} from "react-scroll"
import "./SkillContainer.css"
import skill1 from "../../Assests/skill1.png"
import { LinearProgress } from '@mui/material'

const SkillContainer = () => {
  return (
    <Element className="skillcontainer" id="skills">
        <div className="skillcontainer__image">
            <img src={skill1} alt="Skills" />
        </div>
        <div className="skillcontainer__text">
            <h2>Skillset</h2>

        <div className="skillcontainer__skillset">
            <h5>REACT</h5>
            <div className="skillcontainer__slider skillcontainer__slider1">
            <LinearProgress variant="determinate" value={90} />
        </div>
        </div>

        <div className="skillcontainer__skillset">
            <h5>NODEJS</h5>
            <div className="skillcontainer__slider skillcontainer__slider2">
            <LinearProgress variant="determinate" value={80} />
        </div>
        </div>
        <div className="skillcontainer__skillset">
            <h5>JAVASCRIPT</h5>
            <div className="skillcontainer__slider skillcontainer__slider3">
            <LinearProgress variant="determinate" value={90} />
        </div>
        </div>
        <div className="skillcontainer__skillset">
            <h5>REDUX</h5>
            <div className="skillcontainer__slider skillcontainer__slider4">
            <LinearProgress variant="determinate" value={80} />
        </div>
        </div>
        <div className="skillcontainer__skillset">
            <h5>HTML</h5>
            <div className="skillcontainer__slider skillcontainer__slider5">
            <LinearProgress variant="determinate" value={95} />
        </div>
        </div>
        <div className="skillcontainer__skillset">
            <h5>CSS</h5>
            <div className="skillcontainer__slider skillcontainer__slider6">
            <LinearProgress variant="determinate" value={95} />
        </div>
        </div>

        <div className="skillcontainer__skillset">
            <h5>BOOTSTRAP</h5>
            <div className="skillcontainer__slider skillcontainer__slider7">
            <LinearProgress variant="determinate" value={95} />
        </div>
        </div>
        </div>       
    </Element>
  )
}
export default SkillContainer
