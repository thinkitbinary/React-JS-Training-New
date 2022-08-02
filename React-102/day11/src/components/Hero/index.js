import React from 'react'
import './custom.css'
import banner from '../../assets/banner.svg'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero_left'> This is My Portfolio</div>
        <div className='hero_right'> 
            <img src={banner} alt="banner" width="600px"/>
        </div>
    </div>
  )
}

export default Hero