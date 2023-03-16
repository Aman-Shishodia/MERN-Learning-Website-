import React from 'react'
import about from '../Img/about.jpg'
import Footer from './Footer'
import { NavLink } from "react-router-dom";
const About = () => {
  return (
      <>
      <div className="home-head">
      <h1>ARTech</h1>
      <NavLink to="/about"><button>About</button></NavLink>
      <NavLink to="/registered"><button>Registered</button></NavLink>
    </div>
    
    <div className="about">
        <div className="about-h1">
        <h1>about</h1>

        </div>
        <div className="about-img">

        <img src={about} alt="" />
        </div>
        <div className="about-p">

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sed, laudantium molestias harum asperiores perspiciatis dolores modi quo maxime. Distinctio ipsum, officia consequuntur unde ratione esse quam repellat odio recusandae veniam necessitatibus, quo libero doloribus sint vel ex illo doloremque accusantium possimus animi inventore nostrum temporibus dolorem expedita. Dolores, similique?</p>
        <h1></h1>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default About