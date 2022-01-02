import React from "react";
import "./card.css"

const Card = ({image, price, text, link, del}) =>{
    const targ = (e)=>{
        console.log(e.target.parentNode.parentNode.parentNode.parentNode.parentNode)
    }
    return (
        <div className="card">
             
            <img src={image} alt="skill image"/>
           
            <div className="cardDescription">
                <p>{text} </p>
                <div className="connect">
                <div className="deleteIcon" onClick={targ}>
          {del}
            </div>
                    <a href={link}>Chat me up</a>
                    <label>{price}</label>
                    
                </div>
            </div>
        </div>
    )
}

export default Card;