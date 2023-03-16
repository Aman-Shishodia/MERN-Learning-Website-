import React from 'react'
import logo1 from '../Img/logo1.jpg'
import logo2 from '../Img/logo2.jpg'
import logo4 from '../Img/logo4.png'
import logo5 from '../Img/logo5.png'
import logo6 from '../Img/logo6.png'
import logo7 from '../Img/logo7.jpg'
import {NavLink} from 'react-router-dom'
import Footer from './Footer'

function Home() {
  return (
    // <header />
    <>
    <div className="home-head">
      <h1>ARTech</h1>
      <NavLink to="/about"><button>About</button></NavLink>
      <NavLink to="/registered"><button>Registered</button></NavLink>
    </div>
    <div className="home-front">
      <div className="home-front-content">
        <h1>Welcome</h1>
        <h1>To ARTech Organisation</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aut ratione cupiditate aliquam natus, explicabo distinctio doloremque corporis voluptatum animi aperiam dolores pariatur numquam et iste ducimus corrupti placeat reiciendis.</p>
        <NavLink to="/about"><button className="home-front-btn">learn more</button></NavLink>
      </div>
    </div>
    <div className="home-middle">
    <h1>Give the Best Start to Your Career</h1>
    <h2><i>Learn, practice, and get hired!</i></h2>
       <div className="home-logo-section">
        <h2>Top companies hiring from us</h2>
            <div className="home-logos">
                <img src={logo7} alt="" />
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo4} alt="" />
                <img src={logo5} alt="" />
                <img src={logo6} alt="" />
            </div>
      </div>
    </div>
    <div className="home-footer">
          {/* <img src={history} alt="" /> */}
          <h1>Our History</h1>
          <h3>Explore over 75 years of transformation with our Orgns</h3>
    </div>
    <Footer />
    </>
  )
}

export default Home;