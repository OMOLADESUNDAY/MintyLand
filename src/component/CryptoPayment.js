import React, { useContext, useEffect, useState } from 'react'
import {ethers} from "ethers"
import { useNavigate } from 'react-router-dom'
import './cryptopayment.css';
import { Store } from './store';
import axios from 'axios';

const CryptoPayment = () => {
 
  const {state}=useContext(Store);
  console.log(state)
  const [ethPrice,setEthPrice]=useState()
  useEffect(()=>{
    
    const FetchData=async()=>{
      try {
        const response=await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum');
         const {data}=response
         console.log(data)
         for (let index = 0; index < data.length; index++) {
          const element = data[index]
          console.log(element)
          if(element.id==='ethereum'){
            const currentDollar=(element.current_price)
            const totalPrice=state.cart.cartItems.reduce((a,c)=>a+c.price * c.quantity,0)
            const ethPrice=totalPrice / currentDollar
            setEthPrice(ethPrice)
          }
         }
        } catch (error) {
        
      }
    }
    FetchData()  
 
  
})


 
  const destinationAddress="0x538642a5f4554a6f42381760f0b51e4203812a82"
  const navigate=useNavigate()
 
    const [transactionError,setTransactionError]=useState('')
    const [transaction,setTransaction]=useState('')

    const paymentHandler=async (e)=>{
        const amount=ethPrice 
    try {

	if (!window.ethereum) {
    alert('No crypto wallet found. Please install the metamask browser ')
		throw  new  Error("No crypto wallet found. Please install it.");
	}

		await  window.ethereum.send("eth_requestAccounts");

		const  provider = new  ethers.providers.Web3Provider(window.ethereum);

		const  signer = provider.getSigner();

		ethers.utils.getAddress(destinationAddress);

		const  transactionResponse = await  signer.sendTransaction({

			to:  destinationAddress,

			value:  ethers.utils.parseEther(amount.toString())

		});
    console.log(transactionResponse)
    setTransaction('payment completed')
    const removeErrorMessage = () => {
      const removeTime = setTimeout(() => {
        setTransactionError("");
        setTransaction("");
        navigate('/asset')
      }, 2000);
      return () => {
        clearTimeout(removeTime);
      };
    };
    removeErrorMessage()
	} catch (error) {
    setTransactionError(error.message)
		

	}
    }
  return (
    <div className='container crptoContainer'>
        <input type="number" className="input" defaultValue={ethPrice}  placeholder='Amount' required/>
        <input type="password" className="input" defaultValue={destinationAddress} readOnly placeholder='Destination Address' required/>
        <button type='submit' className='btn' onClick={()=>paymentHandler()}>pay</button>
        <div>{transaction}</div>
        <div>{transactionError}</div>
    </div>
  )
}

export default CryptoPayment