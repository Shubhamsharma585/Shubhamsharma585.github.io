import React from "react";
import "./Project.css";
//import { makeStyles } from '@material-ui/core/styles';
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import ipo from "../../images/ipo.gif";
import shine from "../../images/shine.gif";
import wa from "../../images/wa.gif";
import hs from "../../images/hs.gif";
import { FaCss3Alt, FaReact, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiMongodb, DiFirebase } from "react-icons/di";
//import { SiRedux, SiMaterialUi } from "react-icons/si";

function Project() {
  const classes = [];

  return (
    <div id="projects" className="project">
      <h1 className="project_header">Projects</h1>
      <br />
      <br></br>

      <div className={classes.root}>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className="projectdiv"
          >
            <Paper>
              <div className="container">
                <div className="content">
                  <div className="content-overlay"></div>
                  <img src={ipo} alt="shine" className="shine_img" />
                  <div className="content-details fadeIn-top">
                    <h3>Shopperstop.com</h3>
                    <p>E-Commerce Website</p>
                  </div>
                </div>

                <div className="gitlive">
                  <a
                    href="https://github.com/Shubhamsharma585/ShoppersStop_Clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <Button
                      className={classes.btn}
                      variant="contained"
                      style={{ fontSize: "14px" }}
                    >
                      GitHub
                    </Button>
                  </a>
                  <div style={{ width: "20px" }} />
                  <a
                    href="https://shoppersstop-clone-sigma.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button
                      className={classes.btn}
                      variant="contained"
                      style={{ fontSize: "14px" }}
                    >
                      Live
                    </Button>
                  </a>
                </div>
              </div>
            </Paper>
          </Grid>

          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className="projectdiv"
          >
            <Paper>
              <div className="container1">
                <div className="content1">
                  <h4>Shopperstop.com</h4>
                  <p>
                    A website which allows user to register and login where user
                    can choose a product and buy it.
                  </p>
                  <p>Project duration: 6 days</p>
                  <p>TechStack: React, Redux, MongoDB, Express, Firebase</p>
                  <p>Team: 3 members</p>
                </div>
                <div>
                  <FaReact style={{ color: "#475569", fontSize: "40px" }} />
                  {/* <SiRedux style={{color:"#475569", fontSize:"40px"}}/> */}
                  <DiMongodb style={{ color: "#475569", fontSize: "40px" }} />
                  <DiFirebase style={{ color: "#475569", fontSize: "40px" }} />
                </div>
              </div>
            </Paper>
          </Grid>

          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className="projectdiv"
          >
            <Paper>
              <div className="container1">
                <div className="content1">
                  <h4>Shine.com</h4>
                  <p>
                    A website which allows applicant and recruiter to make their
                    account. On portal recruiter can post a job and applicant
                    can apply for a job.
                  </p>
                  <p>Project duration: 4 days</p>
                  <p>TechStack: React, Redux, Firebase</p>
                  <p>Team: 4 members</p>
                </div>
                <div>
                  <FaReact style={{ color: "#475569", fontSize: "40px" }} />
                  {/* <SiRedux style={{color:"#475569", fontSize:"40px"}}/> */}
                  <DiFirebase style={{ color: "#475569", fontSize: "40px" }} />
                </div>
              </div>
            </Paper>
          </Grid>

          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className="projectdiv"
          >
            <Paper>
              <div className="container">
                <div className="content">
                  <div className="content-overlay"></div>
                  <img className="ss_img" src={shine} alt="shopperstop" />
                  <div className="content-details fadeIn-top">
                    <h3>Shine.com</h3>
                    <p>Online Job Portal</p>
                  </div>
                </div>

                <div className="gitlive">
                  <a
                    href="https://github.com/Shubhamsharma585/Shine-masai"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <Button
                      className={classes.btn}
                      variant="contained"
                      style={{ fontSize: "14px" }}
                    >
                      GitHub
                    </Button>
                  </a>
                  <div style={{ width: "20px" }} />
                  <a href="https://shine-masai.vercel.app/" target="_blank" rel="noreferrer">
                    {" "}
                    <Button
                      className={classes.btn}
                      variant="contained"
                      style={{ fontSize: "14px" }}
                    >
                      Live
                    </Button>
                  </a>
                </div>
              </div>
            </Paper>
          </Grid>

          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className="projectdiv"
          >
            <Paper>
              <div className="container">
                <div className="content">
                  <div className="content-overlay"></div>
                  <img src={wa} alt="whatsapp" className="wa_img" />
                  <div className="content-details fadeIn-top">
                    <h3>Whatsapp.com</h3>
                    <p>Messaging app</p>
                  </div>
                </div>

                <div className="gitlive">
                  <a
                    href="https://github.com/Shubhamsharma585/Whatsapp_Clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <Button
                      className={classes.btn}
                      variant="contained"
                      style={{ fontSize: "14px" }}
                    >
                      GitHub
                    </Button>
                  </a>
                  <div style={{ width: "20px" }} />
                  <a
                    href="https://whatsappbyshubhamsharma585.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <Button
                      className={classes.btn}
                      variant="contained"
                      style={{ fontSize: "14px" }}
                    >
                      Live
                    </Button>
                  </a>
                </div>
              </div>
            </Paper>
          </Grid>

          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className="projectdiv"
          >
            <Paper>
              <div className="container1">
                <div className="content1">
                  <h4>Whatsapp.com</h4>
                  <p>
                    A website which allows user to register through gmail
                    account where user can search for registerd users and start
                    communicating with them using chats, emojis and pictures.
                  </p>
                  <p>Project duration: 3 days</p>
                  <p>TechStack: React, Context API, Firebase</p>
                  <p>Team: Individual</p>
                </div>
                <div>
                  <FaReact style={{ color: "#475569", fontSize: "40px" }} />
                  <DiFirebase style={{ color: "#475569", fontSize: "40px" }} />
                  {/* <SiMaterialUi style={{color:"#475569", fontSize:"40px"}}/> */}
                </div>
              </div>
            </Paper>
          </Grid>

          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className="projectdiv"
          >
            <Paper>
              <div className="container1">
                <div className="content1">
                  <h4>HubSpot.com</h4>
                  <p>
                    A website where user can register themselves and navigate
                    through the services hubspot provide.
                  </p>
                  <p>Project duration: 4 days</p>
                  <p>TechStack: HTML, CSS, JavaScript.</p>
                  <p>Team: 4 members</p>
                </div>
                <div>
                  <FaHtml5
                    style={{
                      color: "#475569",
                      fontSize: "40px",
                      margin: "5px",
                    }}
                  />
                  <FaCss3Alt
                    style={{
                      color: "#475569",
                      fontSize: "40px",
                      margin: "5px",
                    }}
                  />
                  <IoLogoJavascript
                    style={{
                      color: "#475569",
                      fontSize: "40px",
                      margin: "5px",
                    }}
                  />
                </div>
              </div>
            </Paper>
          </Grid>

          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className="projectdiv"
          >
            <Paper>
              <div className="container">
                <div className="content">
                  <div className="content-overlay"></div>
                  <img src={hs} alt="hubspot" className="hs_img" />
                  <div className="content-details fadeIn-top">
                    <h3>HubSpot.com</h3>
                    <p>Internet Marketing Company</p>
                  </div>
                </div>
                <div className="gitlive">
                  <a
                    href="https://github.com/Shubhamsharma585/HubSpot_Clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <Button
                      size="large"
                      className={classes.btn}
                      variant="contained"
                      style={{ fontSize: "14px" }}
                    >
                      GitHub
                    </Button>
                  </a>
                  <div style={{ width: "20px" }} />
                  <a
                    href="https://hubspot-clone.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <Button
                      size="large"
                      className={classes.btn}
                      variant="contained"
                      style={{ fontSize: "14px" }}
                    >
                      Live
                    </Button>
                  </a>
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Project;
