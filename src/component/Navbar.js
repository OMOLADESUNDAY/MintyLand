import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { BiBell, BiMenu} from 'react-icons/bi'
import {TiTimes} from 'react-icons/ti'
import './navbar.css';

const Navbar = () => {
    const [show, setShow] = useState(false)
    const [notification, setNotification] = useState(1);
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
  const changeNotification = () => {
    setNotification(notification+1)
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
              <Link to="/assets" onClick={() => setShow(false)}>
                Assets
              </Link>
            </li>
            <li>
              <Link to="/events" onClick={() => setShow(false)}>
                Events
              </Link>
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
                    notification <= 0 ? "hidenotification" : "notificationCount"
                  }
                >
                  <p onClick={changeNotification}>{notification}</p>
                </div>
                <BiBell className="bell" />
              </Link>
            </li>
            <li>
              <Link onClick={() => setShow(false)} to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link onClick={() => setShow(false)} to="/signup">
                Signup
              </Link>
            </li>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar