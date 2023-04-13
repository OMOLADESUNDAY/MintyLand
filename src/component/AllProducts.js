import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { TiTrash } from 'react-icons/ti'
import { toast } from 'react-toastify'
import { getError } from './utils'
import "./Allproduct.css"
import Navbar from './Navbar'

const AllProducts = () => {
  const [loading,setloading]=useState(true)
  const [product,setProduct]=useState([])
  useEffect(()=>{
    const fetchData=async()=>{
      try {
        
        const response=await axios.get(`https://cloudy-toad-wig.cyclic.app/api/admin/allproducts`)
        // const response=await axios.get(`http://localhost:5000/api/admin/allproducts`)
        const {data}=response
        console.log(data)
        if(data){
          setloading(false)
          setProduct(data)
        }
      } catch (error) {
        toast.error(getError(error))
       }
    }
    fetchData()
  },[])
  const deleteProductHandler=async(id)=>{
    const response= await axios.delete(`https://cloudy-toad-wig.cyclic.app/api/admin/delete/${id}`)
    
  //  const response= await axios.delete(`http://localhost:5000/api/admin/delete/${id}`)
    const {data}=response
    if(data){
      const newProduct=product.filter((item)=>item._id !== id)
      setProduct(newProduct)
    }
  }
  if(loading){
    return(
      <div className='loading__center'>
      <div className="ring"></div>
      <span className="loading">Loading</span>
    </div>
    )
  }
  return (
    <div className='container'>
       <Navbar />
        <h2 style={{textAlign:"center",margin:"1rem"}}>All Products</h2>
        <div style={{height:"88vh",overflow:"auto",marginBottom:"2rem"}} >
        {product.map((singleProduct)=>{
        const {name,_id,image,category}=singleProduct
        return(
          <section key={_id} className='bottomContainer'>
            <img className='ProImg'   src={image} alt={name} />
            <p  style={{width:"25%"}}>{name}</p>
            <p  style={{width:"25%"}}>{category}</p>
            <TiTrash onClick={()=>deleteProductHandler(_id)} style={{cursor:"pointer",width:"25%"}}/>
          </section>
        )
      })}
    </div>
    </div>
    
  )
}

export default AllProducts


