import React, {useState, useEffect} from "react";
import {Link } from "react-router-dom";
import "./nav.css"
import close  from "./whiteclose.svg"
import menu from "./whitemenu.svg"


const NavStyle = ()=>{

    const [myImage, setMyImage] = useState(menu)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [ToggleMenu, setToggleMenu] = useState(false)

useEffect(()=>{
    const changeWidth = ( )=>{
        setScreenWidth(screenWidth);
    } 
    if(ToggleMenu === true){
        setMyImage(close)
    }
    if(ToggleMenu === false){
        setMyImage(menu)
    }
    window.addEventListener("resize", changeWidth)
        return ()=>{
            window.removeEventListener("resize", changeWidth)
        }
}, [ToggleMenu])
 const changeIcon = ()=>{
     setToggleMenu(!ToggleMenu);
 }

    return (
        <div className="nawao">
        <img src={myImage} alt="styling" className="menuBtn" onClick={changeIcon} />
         <div className="ourNav"><nav>Leaner'sConnect </nav></div>
       {((ToggleMenu || screenWidth>800) && ( <div className="homeNav">
       <ul>
       <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-cursor-fill" viewBox="0 0 16 16">
  <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"/>
</svg><Link to="/SignUp">Enroll</Link></li>
       <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-app-indicator" viewBox="0 0 16 16">
  <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"/>
  <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
</svg><Link to="/about">About</Link></li>
       <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-shield-fill-check" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z"/>
</svg><Link to="/contact">Contact Us.</Link></li>
       </ul>
       </div>))} 
        </div>
    )
}

export default NavStyle;