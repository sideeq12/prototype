import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom"
import "./NavLink.css"
import menu from "./ordinary.svg"
import close from "./whiteclose.svg"
import learners from "./learner.png"
import learners1 from "./logosect.svg"

    

const NavLinks = ()=>{
    const [ToggleMenu, setToggleMenu] = useState(false)
    const [myImage, setMyImage] = useState(menu)
    const [screenWidth, setScreenWidth] = useState( window.innerWidth)
    

 const MenuChange = ()=>{
        setToggleMenu(!ToggleMenu)
 }
 
 useEffect(()=>{
     const changeWidth = ()=>{
        setScreenWidth(window.innerWidth)
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

 
    return ( <>
    <img src={myImage} alt="menu icon for learnersConnect" onClick={MenuChange}  className="iconImage" />
    <nav className="imagelogo"><img src={learners} alt="learner's Connect icon"/></nav>
    <nav className="imagelogo1"><img src={learners1} alt="learner's Connect icon"/></nav>
            { (ToggleMenu || screenWidth >800) && (
                <div className="myNav">
                <ul>
                <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
</svg> <Link to="/dashboard">Profile</Link>
                    </li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-wallet2" viewBox="0 0 16 16">
  <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"/>
</svg> <Link to="/templatelist">Template list</Link>
                    </li>
                    <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-file-plus" viewBox="0 0 16 16">
  <path d="M8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5V6z"/>
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
</svg> <Link to="/newskill">New skill</Link>
                    </li>
                    <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-send-exclamation" viewBox="0 0 16 16">
  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855a.75.75 0 0 0-.124 1.329l4.995 3.178 1.531 2.406a.5.5 0 0 0 .844-.536L6.637 10.07l7.494-7.494-1.895 4.738a.5.5 0 1 0 .928.372l2.8-7Zm-2.54 1.183L5.93 9.363 1.591 6.602l11.833-4.733Z"/>
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1.5a.5.5 0 0 1-1 0V11a.5.5 0 0 1 1 0Zm0 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/>
</svg> <Link to="/support">Contact support.</Link>
                    </li>
            </ul>
            </div>
            )}
        </>
    )
}

export default NavLinks;