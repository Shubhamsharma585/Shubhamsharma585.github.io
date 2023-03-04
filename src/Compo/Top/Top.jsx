import React from "react";
import "../Home.css";
import ban from "../../images/ban.svg";
//import Typical from 'react-typical'
import { Link } from "react-scroll";

function Home() {
  return (
    <div id="home_top" className="home_top">
      <div className="home_banner">
        <div>
          <img src={ban} className="home_image" />
        </div>

        <div className="home_profile">
          <h1 className="home_tag">Full Stack Developer</h1>
          <h1 className="home_name">
            <strong>Shubham Sharma</strong>
          </h1>
          {/* <Typical                
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
                 /> */}

          <Link to="projects" spy={true} smooth={true}>
            {" "}
            <div className="home_getstarted">
              <p className="mywork">View my work</p>
              <p></p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
