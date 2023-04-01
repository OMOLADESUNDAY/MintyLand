import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useReducer } from 'react'
import './singleAsset.css'
import { getError } from './utils'
import axios from 'axios'
import { Store } from './store';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
const reducer=(state,action)=>{
  switch (action.type) {
    case 'FETCH_REQUEST':
      return {...state,loading:true};
    case 'FETCH_SUCCESS':
      return {...state,product:action.payload,loading:false};
    case 'FETCH_FAIL':
        return {...state, loading:false, error:action.payload};  
  
    default:
      break;
  }
}

const SingleAsset = () => {
  const navigate=useNavigate()
    const para =useParams();
    const { id } =para;
    const [{loading,product,error}, dispatch]=useReducer((reducer),{loading:true,product:[],error:''})
  // const [product,setProduct]=useState([]);
  useEffect(()=>{
    
      const FetchData=async()=>{
        dispatch({type:"FETCH_REQUEST"})
        try {
          const response=await axios.get(`https://cloudy-toad-wig.cyclic.app/api/product/id/${id}`); 
 
          dispatch({type:"FETCH_SUCCESS",payload:response.data})
        } catch (error) {
          dispatch({type:"FETCH_FAIL",payload:getError(error)})
        }
      }
      FetchData()  
   
    
  },[id])
  const {state, dispatch:ctxDispatch}=useContext(Store)
  const {cart} =state
  // console.log(cart)
  const AddToCartHandler= async ()=>{
    console.log(cart)
    const existItem=cart.cartItems.find((x)=>x._id===product._id)
    console.log(product);
    const quantity=existItem ? existItem.quantity+1: 1;
    const data= await axios.get(`https://cloudy-toad-wig.cyclic.app/api/product/${product._id}`)
    // const data2= await axios.get(`http://localhost:5000/api/landandestate/${product._id}`)
    // console.log(data);
    if(data.countInStock < quantity){
      window.alert('sorry. Product is out of stock')
      return;
    }
    ctxDispatch({type:"CART_ADD_ITEM",payload:{...product,quantity}})
    navigate('/notification')
  }
  if (loading){
    return(
      <div className='loading__center'>
      <div className="ring"></div>
      <span className="loading">Loading</span>
    </div>
    )
  }
  if (error){
    return(
      <div>{error}</div>
    )
  }
    return (
    <section className='container '>
      <Navbar/>
      <div className='singleProductContainer'>
      <div className='leftSingleProduct'>
          <img src={product.image} alt={product.name} />
        </div>
        <div className='centerSingleProduct'>
            <h1>{product.name}</h1>
            <hr/>
            <p>price: ${product.price}</p>
            <hr/>
            <p>description: {product.description}</p>
        </div>
        <div className='rightSingleProduct'>
            <p>price: ${product.price}</p>
            <hr/>
            <p>Status: <small className={product.countInStock > 0 ? 'available':'outofstock'}>{product.countInStock > 0 ? 'InStock':'outofstock'}</small></p>
            <hr/>
            <button onClick={AddToCartHandler} className='btn addtocartbtn'>add to cart</button>
        </div>

      </div>
        
    </section>
  )
}

export default SingleAsset