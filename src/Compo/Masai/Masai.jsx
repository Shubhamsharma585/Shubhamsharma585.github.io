import React from "react";
import "./Masai.css";
import { Paper, Grid } from "@mui/material";

function Masai() {
  const classes = [];

  return (
    <div className="masai">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item lg={3} sm={6} xs={6} className="masaibox">
            <Paper className={classes.paper}>
              <div className="masaiu">
                <p className="hour">1200+</p>
              </div>
              <div className="masail">
                <p className="htag1">Hours</p>
                <p className="htag">of full stack coding</p>
              </div>
            </Paper>
          </Grid>
          <Grid item lg={3} sm={6} xs={6} className="masaibox">
            <Paper className={classes.paper}>
              <div className="masaiu">
                <p className="hour">300+</p>
              </div>
              <div className="masail">
                <p className="htag1">DSA</p>
                <p className="htag">Problems</p>
              </div>
            </Paper>
          </Grid>
          <Grid item lg={3} sm={6} xs={6} className="masaibox">
            <Paper className={classes.paper}>
              <div className="masaiu">
                <p className="hour">10+</p>
              </div>
              <div className="masail">
                <p className="htag1">Projects</p>
              </div>
            </Paper>
          </Grid>
          <Grid item lg={3} sm={6} xs={6} className="masaibox">
            <Paper className={classes.paper}>
              <div className="masaiu">
                <p className="hour">100+</p>
              </div>
              <div className="masail">
                <p className="htag1">Hours</p>
                <p className="htag">of soft skill</p>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Masai;
