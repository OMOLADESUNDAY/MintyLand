import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { TiTrash } from 'react-icons/ti'
import { toast } from 'react-toastify'
import { getError } from './utils'
import "./Allproduct.css"
import Navbar from './Navbar'
import { SERVERMACHINE } from './envconfig'

const AllUsers = () => {
  const [loading,setloading]=useState(true)
  const [user,setUser]=useState([])
  const [total,setTotal]=useState([0])
  const [totalSales,setToTalSales]=useState(0)

  useEffect(()=>{
    const fetchData=async()=>{
      try {
        const response =await axios.get(`${SERVERMACHINE}/api/admin/allusers`)
        // const response=await axios.get(`http://localhost:5000/api/admin/allusers`)
        const {data}=response
        if(data){
          setloading(false)
          setUser(data)
          let aa=[]
          for (let index = 0; index < data.length; index++) {
            const element = data[index];
            // console.log(element.assets.asset.length)
            aa.push(element.assets.asset.length)
            // let to =+  element.assets.asset.length
            setTotal(aa)
          }
          const sales= total.reduce((a,c)=>a+c)
          setToTalSales(sales)
        }
      } catch (error) {
        toast.error(getError(error))
       }
    }
    fetchData()
  },[total])
  
  const deleteProductHandler=async(id)=>{
   const response= await axios.delete(`${SERVERMACHINE}/api/admin/deleteuser/${id}`)
    const {data}=response
    if(data){
      const newProduct=user.filter((item)=>item._id !== id)
      setUser(newProduct)
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
       <Navbar/>
        <h2 style={{textAlign:"center",margin:"1rem"}}>All Users</h2>
        <h3>TotalSales={totalSales}</h3>
        <div style={{height:"88vh",overflow:"auto",marginBottom:"2rem"}}>
        {user.map((singleProduct)=>{
        const {name,_id,email,assets}=singleProduct
        return(
          <div>
          <section key={_id} className='bottomContainer'>
            <p  className='adp'>{name}</p>
            <p  className='adp mail'>{email}</p>
            <p  className='adp asst'>{assets.asset.length}</p>
            <TiTrash onClick={()=>deleteProductHandler(_id)} style={{cursor:"pointer"}}/>
          </section>
          <hr />
          </div>
        )
      })}
      
    </div>
    </div>
    
  )
}

export default AllUsers


