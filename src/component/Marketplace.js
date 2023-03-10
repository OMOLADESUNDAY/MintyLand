import React, { useEffect, useState } from 'react'
import { BiBarChart} from 'react-icons/bi'
import { TiTag } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import {API} from './data'
import { Pagination,Autoplay } from "swiper";
import "./marketplace.css"


import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Explore='Explore >>'
const Marketplace = () => {
  const [slideShowLen,setSlideShowLen]=useState(2);
  const [size,setSize]=useState(window.innerWidth);
  const checksize=()=>{
    setSize(window.innerWidth)
  }
  useEffect(()=>{
    const dsize=window.addEventListener('resize',checksize);
    if(size <= 768){
        console.log('hello')
        setSlideShowLen(1)
    }
    else{
      setSlideShowLen(2)
    }
    return()=>{
      window.removeEventListener('resize',dsize)
    }
  },[slideShowLen,size])
  return (
    <section className='container'>
      <Navbar/>
       <article className='overviewCon'>
          <h3 className='overview'>Overveiw</h3>
          <h3><Link to='/assets'>My Assets</Link></h3>
       </article>
       <article className='marketVolume'>
        <div className='marketVolumetop'>
          <div className='marketVolumetopLeft'>
            <h2>Marketplace Volume</h2>
            <p>Includes Land,Wearable,Emotes and Names</p>
          </div>
          <div className='marketVolumetopRight'>
            <div className='day7'>7day</div><div className='day30'>30day</div><div className='dayall'>All</div>
          </div>
        </div>
        <div className='marketVolumetopbtm'>
          <div className='changeres'><div className='iconCon'><TiTag/></div>
          <div><h5>TOTAL SALES</h5>
            <div className='salesnum'><h2>1.50k</h2><div><p>215/day</p></div></div>
          </div></div>
          <div className='changeres'>
          <div className='iconCon'><BiBarChart/></div>
          <div><h5>TOTAL VOLUME</h5>
            <div className='salesnum'><h2>203.35k</h2><h2>$85.46k</h2></div>
          </div>
          </div>
          
          
        </div>
       </article>
       <article className='trendingContainer'>
        <div className='trendwrap'>
        <div>
        <h2 className='trendingItemText'>Trending Items</h2>
        <div className='trendText'><p>Best Selling Item over the last 24h&#128293;</p></div>
        
        </div>
        <Link className='exploree' to='/trending'>{Explore}</Link>
        </div>
        <Swiper
      
       // install Swiper modules
       modules={[Pagination,Autoplay]}
       spaceBetween={40}
       slidesPerView={slideShowLen}
       pagination={{ clickable: true }}
       autoplay={{delay:3000}}
     >
       {API.TrendingData.map((trendItem) => {
         return (
           <SwiperSlide key={trendItem.id} className="" >
             <div className='SwiperImageContainer' style={{padding:0,margin:0,width:"100%"}}>
               <img
               style={{width:"100%"}}
                 src={trendItem.image}
                 alt={trendItem.name}
               />
             </div>
             <h5 className="swipename">{trendItem.name}</h5>
           </SwiperSlide>
         );
       })}
     </Swiper>
       </article>
       <article>
        <div className='trendwrap'>
        <h2>Land and Estate</h2>
        <Link className='exploree' to='/landandEstate'>{Explore}</Link>
        </div>
       
        <Swiper
      
       // install Swiper modules
       modules={[Pagination,Autoplay]}
       spaceBetween={40}
       slidesPerView={slideShowLen}
       pagination={{ clickable: true }}
       autoplay={{delay:5000}}
     >
       {API.LandAndEstateData.map((landEstate) => {
         return (
           <SwiperSlide key={landEstate.id} >
             <div  className='SwiperImageContainer'>
               <img
                 className=""
                 src={landEstate.image}
                 alt=""
               />
             </div>
             <h5 className="swipename">{landEstate.name}</h5>
           </SwiperSlide>
         );
       })}
     </Swiper>
       </article>
       <h2 className='recentSoldText'>Recently Sold</h2>
       <article className='recentSoldContainer'>
        <div className='recentTop'><h3>Land</h3><h3>Estate</h3><h3>Shares</h3></div>
        <div>
          <div className='recentspread'><h3>Assets</h3><h3>Rarity</h3><h3>Volume</h3></div>
          {API.RecentSold.map((recentsold)=>{
            const {id,name,image,volume,rarity,landSize}=recentsold
            return(
              <div key={id} className='soldcon'>
                <div className='recentspread'>
                  <div className='recentNameAndImg'>
                  <div className='recentImage' style={{width:"30px",height:"30px"}}><img alt={name} src={image}/></div>
                  <h2 className='namee'>{name}</h2>
                  </div>
                  <div className='rare'>{rarity}</div>
                  <div className='rareRight'><img src={landSize} alt={name} style={{width:"30px",height:"30px"}}/>{volume}</div>
                  </div>
                <hr/>
              </div>
            )
          })}
        </div>
       </article>
    </section>
  )
}

export default Marketplace