import React from 'react';
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import './App.css';
import Home from './component/Home'
import Marketplace from './component/Marketplace'
import Assets from './component/Assets';
import Notification from './component/Notification';
import Login from './component/Login';
import Signup from './component/Signup';

import { Route, Routes } from "react-router-dom";
import Footer from './component/Footer';
import Trending from './component/Trending';
import LandAndEstate from './component/LandAndEstate';
import ConnectWallet from './component/ConnectWallet';
import PageNotFound from './component/PageNotFound';
import SingleAsset from './component/SingleAsset';
import Admin from './component/Admin';
import CryptoPayment from './component/CryptoPayment';

function App() {
  return (
    <div className="App">
      <ToastContainer style={{position:'absolute',bottom:'10px',right:'40%'}} limit={1}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/landandEstate" element={<LandAndEstate />} />
        <Route path="/connectwallet" element={<ConnectWallet />} />
        <Route path="/api/product/id/:id" element={<SingleAsset />} />
       <Route path='/admin' element={<Admin/>}/>
       <Route path='/cryptopayment' element={<CryptoPayment/>}/>
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
