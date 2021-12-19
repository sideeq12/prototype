import React from "react";
import "./mission.css"
import image from "./second.svg"

const Mission = ()=>{
    return (
        <section className="mission">
            <img src={image} alt="Learners Connect mission image" />
            <p>The first student platform for peer-to-peer learning for students in order to improve both and0
                  extra curricular activities to improve your skills ,
                 find hobby and network wth thousands of fellow students within your vicinity</p>
        </section>
    )
}

export default Mission ;