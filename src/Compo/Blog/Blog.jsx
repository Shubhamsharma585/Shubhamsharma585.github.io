import React from "react";
import "./Blog.css";
import ssblog from "../../images/ssblog.jpeg";
import { MdSchedule } from "react-icons/md";

function Blog() {
  return (
    <div id="blog" className="blog">
      <h1 className="project_header">Blogs</h1>

      <div className="blog_box">
        <div className="blog_detail">
          <h1>Clone of Shoppersstop.com</h1>
          <p>
            <span>Jun 20, 2021</span>{" "}
            <span style={{ marginLeft: "15px" }}>
              <MdSchedule
                style={{
                  marginLeft: "15px",
                  marginRight: "5px",
                  fontSize: "20px",
                  marginBottom: "-4px",
                }}
              />
              3 min read
            </span>
          </p>
          <p>
            Hello amigos, This is Shubham with a new project. This time I worked
            as a team lead with more two members Manish Kumar Nayak and Tushar
            Taral. We built a clone of Shoppersstop.com which is an
            E-Commerce platform allows...
            <a href="https://shubhamsharma585.hashnode.dev/clone-of-shoppersstopcom">
              read more
            </a>
          </p>
        </div>

        <div className="blog_image">
          <a href="https://shubhamsharma585.hashnode.dev/clone-of-shoppersstopcom">
            {" "}
            <img src={ssblog} className="blog_img" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Blog;
