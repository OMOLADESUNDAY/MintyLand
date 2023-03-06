import React from 'react'
import {FaWallet} from 'react-icons/fa'
import './connectwallet.css'
import Navbar from './Navbar'
const ConnectWallet = () => {
  return (
    <React.Fragment>
        <Navbar/>
        <section className='container connectContainer'>
        <article className='connectWrapper'>
            <div className='walletIconContainer'><FaWallet className='walletIcon'/></div>
            <button className='btn connectBtn'>Connect wallet</button>
        </article>
        
    </section>   
    </React.Fragment>
    
  )
}

export default ConnectWallet