import React from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'


const About = () => {
  return (
   
    <section className='about' id='about'>
        <div className="container">
            <div className="banner">
                <div className="top">
                    <div className="heading">ABOUT US</div>
                    <p>The Only Thing we are serious about is Food</p>
                </div>
                <p className='mid'>
                publishing and graphic design, Lorem ipsum  is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.

                </p>
                <Link to={"/menu"}>Explore Menu <span><HiOutlineArrowNarrowRight /> </span></Link>
            </div>
            <div className="banner"><img src="/about.png" alt="about" /></div>
        </div>
         </section>
  )
    
}

export default About