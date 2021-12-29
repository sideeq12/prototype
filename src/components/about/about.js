import React from "react";
import NavLinks from "../NavLink/navLink";
import "./about.css"
import support from "./support.jpg"


const FAQ =()=>{
    return (
        <div className="dashboardWrap">
            <NavLinks /> 
            <div className="AboutWrapper">
                <img src={support} alt="support image" />
                <div className="Textabout">
                    <h2>FAQ</h2>
                    <p>
                    Frequently asked questions  <br/>
Below are some commonly-asked questions for Learner's Connect users Ranging from account management to handling orders and everything in between, find all the answers you need. 

 <br/>

<b>Account management</b> <br/>
Is my personal information safe? <br/>
We care about your privacy. You can read our Privacy Policy for more. The Privacy Policy is part of our Terms of Service.
<br/>

<b>How do I change/reset my password?</b> <br/>

Here is how you can change your password:
In your log in page click on "forgot password"
Type in your secret word to confirm it's your account.
Type in your new password and confirm it<br/>

<b>How do I close my account? </b> <br/>
We will be glad if you stayed, However, you can follow this guide have your account closed


<b>Does Learner's Connect charge a fee?</b> <br/>
 
No. Any fee charged for any services will solely depend on the learner and the person offering the service
 
 
How should I label or name my service or request cards?
 
Keep it simple and descriptive! The name of each package should highlight what is distinctive about that particular package. Try to think about what will catch a The Learner's eye.

To get answers to other questions go to "contact Us" and send Us an Email.
                    </p>
                </div>
            </div>
            </div>
    )
}

export default FAQ;