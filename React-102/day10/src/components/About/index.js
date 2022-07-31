import React from 'react'
import './custom.css'
import banner from '../../assets/banner.svg'

const About = (props) => {
  return (
    <div className='about'>
        <div className='about_left'>
           <h2>{props.name}</h2> 
           <p className='about_text'>
            Hello I am a front end Developer and you are welcome to my portfolio
           </p>
        </div>
        <div className='hero_right'> 
            <img src={banner} alt="banner" width="600px"/>
        </div>
    </div>
  )
}

export default About