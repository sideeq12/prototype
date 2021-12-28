import React from "react";
import "./login.css"
import image from "./login.svg"
import LoginDetails from "./loginContent"
import FirstNav from "./firstNav";
import learner from "./learner.svg"

const Login = ()=>{
    return (
        <div className="mainLogin">
                 <FirstNav />
           <div className="secondLogin">
               <nav><img src={learner} alt="logo"/></nav>
            <img src={image} alt="Login image section for Leaner's connect"/>
            <p>The first networking platform for student's on campus, where you showcase your
knowledge, to peer-to-peer learning.</p>
           </div>
           <LoginDetails />
        </div>
    )
}

export default Login;