import React from 'react';
import './App.css';
import Home from './component/Home'
import Marketplace from './component/Marketplace'
import Assets from './component/Assets';
import Events from './component/Events';
import Notification from './component/Notification';
import Login from './component/Login';
import Signup from './component/Signup';

import { Route, Routes } from "react-router-dom";
import Footer from './component/Footer';
function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/events" element={<Events />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
