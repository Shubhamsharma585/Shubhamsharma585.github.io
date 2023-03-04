import React from "react";
import "./Footer.css";
import { Link } from "react-scroll";
import { ImArrowUp, ImHeart } from "react-icons/im";

function Footer() {
  return (
    <div className="footer">
      <Link to="home_top" spy={true} smooth={true}>
        <div className="footertop">
          <ImArrowUp
            style={{ color: "white", fontSize: "25px", marginRight: "0px" }}
          />
        </div>
      </Link>

      <p className="footer_name">
        Designed and Developed with{" "}
        <ImHeart
          style={{
            color: "red",
            fontSize: "10px",
            marginRight: "5px",
            marginTop: "5px",
          }}
        />
        by <span className="foo_name">Shubham Sharma .</span>
      </p>
    </div>
  );
}

export default Footer;
