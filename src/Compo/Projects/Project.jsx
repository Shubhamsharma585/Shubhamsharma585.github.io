import React from 'react'
import "./Project.css"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import ss from "../../images/shoppers.png"
import shine from "../../images/shine.png"
import wa from "../../images/wa3.jpeg"
import hs from "../../images/hubspot.jpeg"
import { FaCss3Alt, FaReact, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiMongodb, DiFirebase } from "react-icons/di";
import { SiRedux } from "react-icons/si";

  
const useStyles = makeStyles((theme) => ({ 
    root: {
        flexGrow: 1,
      }, 
      paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }

}))



function Project() {


    const classes = useStyles();


    return (
        <div id="projects" className="project">
            <h1 className="project_header">Projects</h1>
            <br/><br></br>

          



           <div className={classes.root}>

            <Grid 
            container 
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
            >
            
               <Grid item  xl={3} lg={4} md={4} sm={6} xs={12} className="projectdiv">
                   <Paper>
                   <div className="container">
                      <div className="content">
                          <div className="content-overlay"></div>
                          <img src={ss} alt="shine" className="shine_img"/>
                          <div class="content-details fadeIn-top">
                            <h3>Shopperstop.com</h3>
                            <p>E-Commerce Website</p>
                            <div className="gitlive">
                                <a href="https://github.com/Shubhamsharma585/ShoppersStop_Clone">  <Button color="secondary" variant="contained" style={{fontSize:"14px"}}>GitHub</Button>
                                </a> 
                            <div style={{width:"20px"}} />
                            <a href="https://shoppersstop-clone-1dr7xijdf-tushartaral.vercel.app/">  <Button color="secondary" variant="contained" style={{fontSize:"14px"}}>Live</Button>
                                </a> 
                            </div>
                            
                          </div>
                      </div>
                       <div>
                         <FaReact style={{color:"#475569", fontSize:"40px"}}/>
                         <SiRedux style={{color:"#475569", fontSize:"40px"}}/>
                         <DiMongodb style={{color:"#475569", fontSize:"40px"}}/>
                         <DiFirebase style={{color:"#475569", fontSize:"40px"}}/>
                       </div>
                      </div> 
                  
                   </Paper>
               </Grid>

               <Grid item xl={3} lg={4} md={4} sm={6} xs={12} className="projectdiv">
                   <Paper>
                     <div className="container">
                      <div className="content">
                          <div className="content-overlay"></div>
                          <img className="ss_img" src={shine} alt="shopperstop"/>
                          <div class="content-details fadeIn-top">
                            <h3>Shine.com</h3>
                            <p>Online Job Portal</p>
                            <div className="gitlive">
                                <a href="https://github.com/Shubhamsharma585/Shine-masai">  <Button color="secondary" variant="contained" style={{fontSize:"14px"}}>GitHub</Button>
                                </a> 
                            <div style={{width:"20px"}} />
                            <a href="https://shine-masai.vercel.app/">  <Button color="secondary" variant="contained" style={{fontSize:"14px"}}>Live</Button>
                                </a> 
                            </div>
                          </div>
                      </div>
                      <div>
                         <FaReact style={{color:"#475569", fontSize:"40px"}}/>
                         <SiRedux style={{color:"#475569", fontSize:"40px"}}/>
                         <DiFirebase style={{color:"#475569", fontSize:"40px"}}/> 
                       </div>
                      </div>                                    
                   </Paper>
               </Grid>
               
               <Grid item  xl={3} lg={4} md={4} sm={6} xs={12} className="projectdiv">
                   <Paper>     
                   <div className="container">
                      <div className="content">
                          <div className="content-overlay"></div>
                          <img src={wa} alt="whatsapp" className="wa_img"/>
                          <div class="content-details fadeIn-top">
                            <h3>Whatsapp.com</h3>
                            <p>Messaging app</p>
                            <div className="gitlive">
                                <a href="https://github.com/Shubhamsharma585/Whatsapp_Clone">  <Button color="secondary" variant="contained" style={{fontSize:"14px"}}>GitHub</Button>
                                </a> 
                            <div style={{width:"20px"}} />
                            <a href="https://whatsappbyshubhamsharma585.netlify.app/">  <Button color="secondary" variant="contained" style={{fontSize:"14px"}}>Live</Button>
                                </a> 
                            </div>
                          </div>
                      </div>
                      <div>
                         <FaReact style={{color:"#475569", fontSize:"40px"}}/>
                         <DiFirebase style={{color:"#475569", fontSize:"40px"}}/> 
                       </div>
                      </div>        
                   </Paper>
               </Grid>

               <Grid item  xl={3} lg={4} md={4} sm={6} xs={12} className="projectdiv">
                   <Paper>
                   <div className="container">
                      <div className="content">
                          <div className="content-overlay"></div>
                          <img src={hs} alt="hubspot" className="hs_img"/>
                          <div class="content-details fadeIn-top">
                            <h3>HubSpot.com</h3>
                            <p>Internet Marketing Company</p>
                            <div className="gitlive">
                                <a href="https://github.com/Shubhamsharma585/HubSpot_Clone">  <Button size="large" color="secondary" variant="contained" style={{fontSize:"14px"}}>GitHub</Button>
                                </a> 
                            <div style={{width:"20px"}} />
                                <a href="https://hubspot-clone.herokuapp.com/">  <Button size="large" color="secondary" variant="contained" style={{fontSize:"14px"}}>Live</Button>
                                </a> 
                            </div>
                          </div>
                      </div>
                      <div>
                        <FaHtml5 style={{color:"#475569", fontSize:"40px", margin:"5px"}}/>
                        <FaCss3Alt style={{color:"#475569", fontSize:"40px", margin:"5px"}}/> 
                        <IoLogoJavascript style={{color:"#475569", fontSize:"40px", margin:"5px"}}/>
                       </div>
                      </div>     
                   </Paper>
               </Grid>
    
            
            </Grid>

            </div>
            
        </div>
    ) 
}

export default Project
