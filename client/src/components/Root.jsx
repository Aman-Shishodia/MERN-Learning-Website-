import React from 'react';
import {  NavLink } from "react-router-dom";
import Header from "./Header";

function Root() {
  return (
    <div>
      <Header />
        <div className="root-page">
          <div className="root-page-content">
        <h1>we are awesome</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptatibus dolor accusantium placeat eligendi natus quasi sapiente ab molestiae minima dignissimos laborum atque quas, repellendus eius harum quia sit. Modi minima, accusantium dignissimos sunt dicta hic. Ducimus harum minus, distinctio illo eum delectus officiis esse, dignissimos incidunt, cumque exercitationem ut.
        </p>
        <NavLink to="/login"><button className="root-btn">Sign In</button></NavLink>
        <span>to learn more</span>
        </div>
        </div>
    </div>
  )
}

export default Root