import React, { useState,useContext } from 'react'
import {Link} from 'react-router-dom'
import { BiBell, BiMenu} from 'react-icons/bi'
import {TiTimes} from 'react-icons/ti'
import './navbar.css';
import {Store} from './store'
const Navbar = () => {
    const [show, setShow] = useState(false)
    const togglerHandler = () => {
       setShow(!show);
         const checkSize = window.addEventListener("resize", () => {
           if (window.screen.width > 768) {
             setShow(false);
             }
         });
      
         return () => {
             window.removeEventListener("resize", checkSize);
        };
  }
 
  const {state,dispatch:ctxDispatch}=useContext(Store)
  const {cart,userInfo}=state
  console.log(state)
  // console.log(userInfo)
  const logoutHandler=()=>{
    ctxDispatch({type:'USER_SIGNOUT'})
  }
  return (
    <header className="header">
      <nav className={show ? "navbarchange navbar" : "navbar"}>
        <div
          className={show ? "togglerContainerChange" : "togglerContainer"}
          onClick={togglerHandler}
        >
          {show ? <TiTimes /> : <BiMenu />}
        </div>
        <div className={show ? "show navlistContainer" : "navlistContainer"}>
          <div className="leftNavbar">
            <li>
              <Link to="/" onClick={() => setShow(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/marketplace" onClick={() => setShow(false)}>
                Marketplace
              </Link>
            </li>
            <li>
            {userInfo ?<Link onClick={() => setShow(false)} to="/assets">
              Assets
              </Link>:<div></div>}
             
            </li>
          </div>
          <div className="rightNavbar">
            <li>
              <Link
                onClick={() => setShow(false)}
                to="/notification"
                className="notificationCountContainer"
              >
                <div
                  className={
                  cart.cartItems.length <= 0 ? "hidenotification" : "notificationCount"
                  }
                >
                  <small >{cart.cartItems.reduce((a,c)=>a+c.quantity, 0)}</small>
                </div>
                <BiBell className="bell" />
              </Link>
            </li>
            <li>
              {userInfo?<div className='logout' onClick={()=>logoutHandler()}>logout</div>:<Link onClick={() => setShow(false)} to="/login">
                Login
              </Link>}
              
              
            </li>
            <li>
              {userInfo ?
                <div className='arrdownCon'>
                  {userInfo.name}
              </div>:
              <Link onClick={() => setShow(false)} to="/signup">
                Signup
              </Link>}
              
            </li>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar