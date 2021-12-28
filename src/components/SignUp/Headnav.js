import React, {useState} from "react";
import { Link } from "react-router-dom";
import logosec from "./logosect.svg"
import learner from "./learner.svg"


const Headnav = ()=>{
    const [width, setWidth] = useState(window.innerWidth)
    let imageLogo;
    if(width > 800){
        imageLogo = logosec
    }else{
        imageLogo = learner
    }
    return(
        <div className="headNav"> 
            <nav><img src={imageLogo} /></nav>
            <ul>
            <li><Link to="/signUp">Enroll</Link></li>
            <li><Link to="/support">FAQ</Link></li>
            <li><Link to="/support">Contact Us.</Link></li>
            </ul>
         </div>
    )
}

export default Headnav;