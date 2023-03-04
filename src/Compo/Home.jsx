import React from "react";
import "./Home.css";
// import ban from "../images/ban.svg"
import Nav from "./Nav/Nav";
import About from "./About/About";
import Prof from "./Prof/Prof";
import Project from "./Projects/Project";
import Blog from "./Blog/Blog";
import Masai from "./Masai/Masai";
import Calender from "./GitCalender/Calender";
import Getin from "./Getin/Getin";
import Footer from "./Footer/Footer";
//import Typical from 'react-typical'
//import { Link } from "react-scroll";
import Top from "./Top/Top";

function Home() {
  return (
    <div id="home_top" className="home_top">
      <div className="navbar2">
        <Nav />
        <Top />

        <About />
        <Masai />

        <Prof />
        <Project />
        <Blog />
        <Calender />
        <Getin />
        <Footer />
      </div>

      <br />
    </div>
  );
}

export default Home;
