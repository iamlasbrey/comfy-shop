import React from 'react'
import img from './sofa.jpg'
import {Link} from 'react-router-dom'
import './About.css'

const About = () => {
    return (
        <div className='about'>
            <div className='home-span-container'>
            <h1 className='home-span'> <Link to='/'> Home </Link> <span>/ About </span></h1>
            </div>
                <div className='image-about'>
                    <div className='img'><img src={img} alt="" /></div>
                    <div className='our-story-divider'>
                        <h1> Our Story </h1>
                        <div className='story-divider'></div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.</p>
                    </div>
                </div>
        </div>
    )
}

export default About
