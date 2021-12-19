import React from "react";
import { Link } from "react-router-dom";

const SignUp = ()=>{
    return(
        <div className="mainSignup">
                    <h2><span>Get started with</span> Leaner's Connect</h2>
                    <form>
                        <div className="data">
                            <label>Full name : </label>
                            <input type="text"  required />
                        </div>
                        <div className="data">
                            <label>Student's email : </label>
                            <input type="email" required />
                        </div>
                        <div className="data">
                            <label>Password : </label>
                            <input type="password"  required />
                        </div>
                        <div className="data">
                            <label>Confirm Password : </label>
                            <input type="password"  required />
                        </div>
                        <button value="" type="submit" className="btn"><Link to="/verification"> Create an account</Link></button>
                    </form>
                    <div className="text">Already have an account ? <Link to="/login"> Login here</Link></div>
                </div>
    )
}

export default SignUp;