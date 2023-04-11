import React from 'react'
import Navbar from './Navbar'
import './home.css'
import { Link } from 'react-router-dom';
import Image1 from '../image/digital-2.png'
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
          <h2 className="discoverText">Discover</h2>
          <h3>Immerse Yourself In The Beautiful and Evolving Virtual Word</h3>
          <h5 className="immerseText">
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
          <div className="homeImageContainer">
            <img src={image1} alt="try" />
          </div>
        </div>
      </article>
      <article className="descovery">
        <div className="left">
          <div className="homeImageContainer">
            <img src={image1} alt="try" />
          </div>
        </div>
        <div className="right">
          <h2 className="discoverText">Trade</h2>
          <h3>Buy & sell LANDs $ Estate From Our Store</h3>
          <h5 className="immerseText">
            Discover LANDs owned by users & experience incredible scenes and
            structures
          </h5>
          <div className="getStarted">
            <Link className="btn " to="/signup">
              Get Started
            </Link>
          </div>
        </div>
      </article>
      <section className="homeAboutContainer">
        <h2 className="discoverText">About MintyLand</h2>
        <h3 className='homeAboutText'>MintyLand allow you to buy and sell virtual assets and real estate</h3>
        <div className="getStarted">
          <Link className="btn " to="/about">
            Read More
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home