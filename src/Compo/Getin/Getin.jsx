import React from 'react'
import "./Getin.css"






function Getin() {



 
    return (
        <div className="getin"> 
           <div className="main">
            <div className="form">

            <div className="getinheading"> <h1 style={{color:"white", margin:"auto", width:"fit-content"}}>Get in Touch</h1></div>
               
                <form action="https://formspree.io/f/xknkqogp" method="POST">
                
                <input type="text" id="fname" name="firstname" placeholder="Your name" required="true" /><br/>
                <input type="mail" id="mailid" name="Email" placeholder="Email Address" required="true"/><br></br>
                <input type="text" id="sub" name="Subject" placeholder="Subject" required="true"/><br></br>
                <textarea id="msg" name="message" placeholder="Message" required="true"></textarea><br/>

                 <button type="submit" variant="contained" color="secondary" size="50px" className="btn">
                    Send Message
                 </button>

                </form>




            </div> 

           <div className="right"></div>

            </div>
        </div>
    )
}

export default Getin
