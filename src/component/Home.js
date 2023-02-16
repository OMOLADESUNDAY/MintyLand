import React from 'react'
import Navbar from './Navbar'
import './home.css'
import { Link } from 'react-router-dom';
import Image1 from '../image/f10.png'
const Home = () => {
  let image1=Image1
  return (
    <div className="container">
      <div className=" homeContainer">
        <Navbar />
        <div className="wrapper">
          <div className="cover">
            <h2 className="welcomeText">Welcome To</h2>
            <h1 className="mintyText">MintyLand</h1>
            <h2 className="buyText">Buy, sell and own virtual lands</h2>
          </div>
        </div>
      </div>
      <article className="descovery">
        <div className="left">
          <h2>Discover</h2>
          <h3>Immerse Yourself In The Beautiful and Evolving Virtual Word</h3>
          <h5>
            Discover LANDs owned by users & experience incredible scenes and
            structures
          </h5>
          <div className="getStarted">
            <Link className="btn " to="/signup">
              Get Started
            </Link>
          </div>
        </div>
        <div className="right">
          <div className='homeImageContainer'>
            <img src={image1} alt="try" />
          </div>
        </div>
      </article>
      {/* <article className="descovery">
        <div className="right">
          <img src={image1} alt="try" />
        </div>
        <div className="left">
          <h2>Discover</h2>
          <h3>Immerse Yourself In The Beautiful and Evolving Virtual Word</h3>
          <h5>
            Discover LANDs owned by users & experience incredible scenes and
            structures
          </h5>
          <div className="getStarted">
            <Link className="btn " to="/signup">
              Get Started
            </Link>
          </div>
        </div>
      </article> */}
    </div>
  );
}

export default Home