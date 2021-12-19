import React from "react";
import { Link } from "react-router-dom";

const LoginDetails = ()=>{
    return(
        <div className="login">
            <h2>Welcome Back</h2>
            <h4>Login to your account </h4>
        <form>
            <label>Email address :</label> <br/>
            <input type="email" placeholder="example@oauife.edu.ng" required /> <br/>
            <label>Password : </label> <br/>
            <input type="password" placeholder="******" required /> <br/>
            <button type="submit" value="submit"><Link to="/dashboard"> Login </Link></button>
        </form>
         Don't have an account ?  <Link to="/signup">Sign up here </Link>
        </div>
    )
}

export default LoginDetails;