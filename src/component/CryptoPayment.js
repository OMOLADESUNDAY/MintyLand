import React, { useRef, useState } from 'react'
import {ethers} from "ethers"
import { useNavigate } from 'react-router-dom'


const CryptoPayment = () => {
  const navigate=useNavigate()
    const amountRef=useRef()
    const destinationRef=useRef()
    const [transactionError,setTransactionError]=useState('')
    const [transaction,setTransaction]=useState('')
    const paymentHandler=async (e)=>{
        const amount=parseFloat(amountRef.current.value)
        const destinationAddress=destinationRef.current.value
        // e.preventDefault();

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
    setTransaction('payment completed')
    navigate('/asset')
	} catch (error) {
    setTransactionError(error)
		

	}
    }
  return (
    <div>
        <input type="number" ref={amountRef} placeholder='Amount' required/>
        <input type="text" ref={destinationRef} placeholder='Destination Address' required/>
        <button type='submit' onClick={()=>paymentHandler()}>pay</button>
        {transactionError !== ""?<small>{transactionError}</small>:<small>{transaction}</small>}
    </div>
  )
}

export default CryptoPayment