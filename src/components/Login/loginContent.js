import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const LoginDetails = ()=>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [ErrorMessage, setErrorMessage] = useState("")
    const [User, setUser] = useState({})
    const checkEmail = (e)=>{
        setEmail(e.target.value)
        console.log(email)
    }
    const checkPassword = (e)=>{
        setPassword(e.target.value)
    }
    const Test = (e)=>{
        e.preventDefault()
        if(email.includes("oauife.edu.ng")){
            if(password === "" ){
                setErrorMessage("Incorrect password")
            }else{
                console.log("approved")
            }
        }else{
            setErrorMessage("Kindly provide valid OAU student's mail")
        }
    }

    
    return(
        <div className="login">
            <h2>Welcome Back</h2>
            <h4>Login to your account </h4>
            <div className="error">{ErrorMessage}</div>
        <form>
            <label>Email address :</label> <br/>
            <input type="email" placeholder="example@oauife.edu.ng" onChange={checkEmail} required/> <br/>
            <label>Password : </label> <br/>
            <input type="password" placeholder="******" onChange={checkPassword} required/> <br/>
            <button type="submit" value="submit" onClick={Test}>Login</button>
        </form>
         Don't have an account ?  <Link to="/signup">Sign up here </Link>
        </div>
    )
}

export default LoginDetails;