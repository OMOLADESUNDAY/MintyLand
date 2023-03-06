import React from 'react'
import Navbar from './Navbar'
import './assest.css'
import { userAssetData } from './data'
const Assets = () => {
  return (
    <div>
      <Navbar/>
      <section className='container assetContainer'>
        {userAssetData.map((data)=>{
          const {id,name,image,volume,totalNumber}=data
          return(
            <article key={id} className='singleAssetContainer'>
            <div className='leftImageContainer'>
            <img src={image} alt={name}/>
          </div>
          <div className='RightImageContainer'>
            <small className='assetSmall'>Asset Name</small>
            <div className='nametotal'><h2 className='assetName'>{name}</h2><h2 className='assetName'>{`+${totalNumber}`}</h2></div>
            
            <small className='assetSmall'>Total Volume</small>
            <h3 className='volume'>{volume}</h3>
            <button className='btn sellBtn'>sell</button>
          </div>
        </article>
          )
        })}
        
      </section>
    </div>
  )
}

export default Assets