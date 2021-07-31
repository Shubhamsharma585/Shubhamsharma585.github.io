import React from 'react'
import "./Home.css"
import ban from "../images/ban.svg" 
import Nav from "./Nav/Nav"
import About from "./About/About"
import Prof from "./Prof/Prof"
import Project from "./Projects/Project"
import Blog from "./Blog/Blog"
import Masai from "./Masai/Masai"
import Calender from './GitCalender/Calender'
import Getin from "./Getin/Getin"
import Footer from "./Footer/Footer"
import Typical from 'react-typical'
import { Link } from 'react-scroll' 
import Top from "./Top/Top"

 
function Home() {

   
    return (
        <div id="home_top" className="home_top">
         
{/* 
          <div className="home_banner">

             <div >  
                 <img src={ban} className="home_image"/>
              </div>

              <div className="home_profile">

                <h1 className="home_tag">Full Stack Developer</h1>
                <h1 className="home_name"><strong>Shubham Sharma</strong></h1>
                <Typical                
                   steps={[
                    'An NITian',
                    600,
                    'GATE Qualified',
                    600,
                    'Frontend',
                    800,
                    'Backend', 
                    800,
                    'Data structures and algorithms',
                    800,
                  ]} 
                   loop={Infinity}
                   wrapper="p"
                   className="home_subtag"
                 /> 
               <Link  to="projects" spy={true} smooth={true}> <div className="home_getstarted">
                <p className="mywork">View my work</p>
                    <p></p>
                </div></Link>

              </div>
          </div> */}


          <div className="navbar2">
           <Nav/>
           <Top/>
           <About/>
           <Masai/>
           <Prof/> 
           <Project/>
           <Blog/>
           <Calender/>
           <Getin/>
           <Footer/>
          </div>    
          
           <br/>


        </div>
    )
}

export default Home
