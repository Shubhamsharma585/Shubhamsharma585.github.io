import React from 'react'
import "./About.css"
import { FaCss3Alt, FaReact, FaHtml5, FaNode, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { IoLogoJavascript, IoMailSharp } from "react-icons/io5";
import { DiMongodb, DiFirebase } from "react-icons/di";
import { SiTypescript, SiRedux } from "react-icons/si";
import { TiLocation } from "react-icons/ti";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
 

 


const useStyles = makeStyles((theme) => ({ 
    root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(0),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }

}))






function About() {


    const classes = useStyles();




    
    return (
        <div id="about" className="about">
             <div className={classes.root}>

             <h1 className="project_header">About</h1>

             <Grid 
            container 
            spacing={0}
            direction="row"
            justifyContent="center"
            alignItems="center"
            >
               
                <Grid item  xl={6} lg={6} md={6} sm={12} xs={12}>
                     <div className="about_left"> 
                     <div className="left_bar"></div>
                        <div className="left_bar">
                        <div className="tech"> <FaHtml5 style={{color:"white", fontSize:"75px", margin:"5px"}}/></div>
                        <div className="tech"> <FaCss3Alt style={{color:"white", fontSize:"75px", margin:"5px"}}/> </div>
                        <div className="tech"> <FaNode style={{color:"white", fontSize:"80px"}}/></div>
                        </div>
                        <div className="left_bar">
                        <div className="tech"> <FaReact style={{color:"white", fontSize:"80px"}}/></div>
                        <div className="tech"> <SiRedux style={{color:"white", fontSize:"80px"}}/></div>
                        <div className="tech"> <IoLogoJavascript style={{color:"white", fontSize:"70px", margin:"10px"}}/></div>
                        </div>
                        <div className="left_bar">
                        <div className="tech"> <DiMongodb style={{color:"white", fontSize:"80px"}}/>   </div>
                        <div className="tech"> <DiFirebase style={{color:"white", fontSize:"80px"}}/>   </div>
                        <div className="tech"> <SiTypescript style={{color:"white", fontSize:"60px", margin:"15px"}}/> </div>
                        </div>       
                    </div> 
                </Grid>





                <Grid item  xl={6} lg={6} md={6} sm={12} xs={12}>
                    <div className="about_right">
                        <div className="info">
                        <h1>Shubham Sharma</h1>
               <h4 className="number">Full Stack Developer</h4>
               <p className="number"> <TiLocation/> Churu, Rajasthan, India </p>    
               <p>
               I am a passionate full stack developer skilled 
               in MERN Stack guided by Masai School, who is 
               looking for opportunity to apply knowledge and 
               shape career and become a valuable assets for organization.
               </p>
               <p className="number"><FaPhoneAlt/> +91-8619941188</p>
               <p className="number"><IoMailSharp/> Shubhamsharma585@gmail.com</p> 
               <div style={{display:"flex", flexDirection:"row"}}> 
                   <a href="https://www.linkedin.com/in/shubhamsharma585/"> <FaLinkedin style={{color:"black",  marginRight:"5px", marginTop:"5px", fontSize:"20px"}}/></a>
                   <a href="https://github.com/Shubhamsharma585"><FaGithub style={{color:"black", marginRight:"10px", marginTop:"5px", fontSize:"20px"}}/></a>
                   <a href="https://drive.google.com/file/d/1Mvdo4FZstRGPDneui6qlFG-hvF-PRJjq/view?usp=sharing"><h3 style={{marginTop:"3px", fontSize:"20px", color:"white"}}>View full Resume</h3></a> 
                </div>  
                        </div>                      
                    </div> 
                </Grid>


            </Grid>    
             </div>
        </div>
    )
}

export default About;






