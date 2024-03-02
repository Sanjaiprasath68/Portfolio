import React from 'react';
import { Element } from 'react-scroll';
import "./ProjectContainer.css";
import Project from '../Project/Project'
import MemeGenerator from "../../Assests/MemeGenerator.png"
import TypingTestGame from "../../Assests/TypingTestGame.png"
import getajokes from "../../Assests/getajokes.png"
import PostifyApp from "../../Assests/PostifyApp.png"
import ClothingEmporium from "../../Assests/ClothingEmporium.png"

const ProjectContainer = () => {
    const Projects = [
    {
            img:ClothingEmporium,
            title:"Clothing-Emporium",
            desc:"Clothing Emporium offers a seamless shopping experience with React, showcasing the latest trends in fashion for style-conscious shoppers.",
            link:"https://clothing-emporium.netlify.app",
    },
    {
        img:PostifyApp,
        title:"Postify",
        desc:"Streamline your social media presence with our post application. Effortlessly create, schedule, and track posts across all your platforms from one convenient dashboard.",
        link:"https://postify-media.netlify.app/",
    },
    {
        img:MemeGenerator,
        title:"Meme-Generator",
        desc:"Dynamic meme-generator platform, allowing users to create and share humorous content effortlessly, enhancing engagement and entertainment online.",
        link:"https://makes-meme.netlify.app/",
    },
    {
        img:TypingTestGame,
        title:"Typing-speed-game",
        desc:"Typing-speed game platform, challenging users to improve their typing skills while competing against friends or the clock, fostering a fun and educational experience.",
        link:"https://typingspeed-game.netlify.app/",
    },
    {
        img:getajokes,
        title:"Joke-Generator",
        desc:"Whimsical joke generator, providing endless laughter with a simple click, delighting users with a wide array of witty and humorous content.",
        link:"https://getajokes.netlify.app/",
    }
]
    
  return (
    <div>
        <Element className="projectcontainer" id="projects">
            <h1>Projects</h1>
            <p>Here are some projects which I done for making of people easy</p>
            <div className="projectcontainer_projects">
            {
                Projects.map((project,index)=>{
                    return (
                        <Project 
                        key={index} 
                        img={project.img} 
                        title={project.title}
                        desc={project.desc}
                        link={project.link}
                        />
                    )
                })
            }
            </div>
        </Element>     
    </div>
  )
}
export default ProjectContainer
