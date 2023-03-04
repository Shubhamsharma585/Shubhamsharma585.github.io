import React from "react";
import "./Prof.css";
import back from "../../images/backend.png";
import algo from "../../images/algo.png";
import front from "../../images/frontend.png";
import { Grid } from "@mui/material";

function Prof() {
  return (
    <div id="profs" className="prof">
      <h1 className="prof_header">Proficiency</h1>

      <div
        style={{
          flexGrow: 1,
        }}
      >
        <Grid
          container
          spacing={6}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
            <div className="prof_block">
              <img src={back} />
              <p className="heading">Backend</p>
              <p className="subheading">Express.js, MongoDB, Firebase</p>
            </div>
          </Grid>
          <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
            <div className="prof_block">
              <img src={front} />
              <p className="heading">Frontend</p>
              <p className="subheading">
                HTML, CSS, React, Redux, Javascript, Typescript, MaterialUI
              </p>
            </div>
          </Grid>
          <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
            <div className="prof_block">
              <img src={algo} />
              <p className="heading">DS & Algo</p>
              <p className="subheading">Intermediate level of Data Structure</p>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Prof;
