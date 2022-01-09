import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./card.css"

const url = "https://learnersconnect.herokuapp.com/api/cards/delete"

const Card = ({image, price, text, link, id, showed}) =>{

    const navigate = useNavigate()
    
    const [showdelete, setShowDelete] = useState(showed)
    const DeleteCard = () =>{
        const Headers = {
            Headers : {
                'Content-Type': 'Application/json'
            }
        }
       axios.post(url, {id : id}, Headers).then((response)=>{
            console.log(response.data.status)
        })
        navigate("/templatelist")
    }
   
    return (
        <div className="card">
             
            <img src={image} alt="skill image"/>
           
            <div className="cardDescription">
                <p>{text} </p>
                <div className="connect">
                 { showdelete && <div className="deleteIcon">
                <svg onClick={DeleteCard} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
          </svg>
            </div>}
                    <a href={link}>Chat me up</a>
                    <label>{price}</label>
                </div>
            </div>
        </div>
    )
}

export default Card;