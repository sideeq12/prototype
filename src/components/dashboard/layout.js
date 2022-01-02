import React, {useEffect, useState} from "react";
import "./layout.css"
import Card from "./card";
import axios from "axios"
import { useNavigate } from "react-router-dom";


const DashboardLayout = ()=>{
    const url = "https://learnersconnect.herokuapp.com/api/dashboard"
    const url2 = "https://learnersconnect.herokuapp.com/api/cardList"
    const navigate = useNavigate()


        const [count, setCount] = useState(true)
        const [cardList, setCardList] = useState([])
    const [userDetails, setUserDetails] = useState({
        image : "",
        full_name :"",
        Faculty : "",
        description : "",
        email : "",
        Gender : "",
        tags : "",
    })
    if(localStorage.getItem("userInfo") !== null){
        const item =localStorage.getItem("userInfo")
        const email = JSON.parse(item).email
        const User = {
            email : email
        }
        const Headers = {
            Headers : {
                'Content-Type': 'Application/json'
            }
        }
    
        if(count === true){
            function userData(){
                axios.post(url, User, Headers).then(response=>{
                     if(response.data.message === "success"){
                         setUserDetails(response.data.data)
                     }
                 }   )  
                  axios.post(url2, User, Headers).then(response =>{
                        if(response.data.message === "success"){
                            const List = response.data.data
                                setCardList(List)
                        }
                 })  
                 
             }
             userData()
                 setCount(false)
        }
    }else{
        navigate("/signUp")
    }
    
    

  
    let skills = userDetails.tags.split(",")
    function dele(){
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
          </svg>
        )
    }
    let message  = dele()

    return (
        <div className="layout">
            <div className="userDetails">
                <img src={userDetails.image} alt="user avatar" />
                <p>
                    <b>{userDetails.full_name}</b>
                    <em>{userDetails.email}</em>
                    <quote>{userDetails.Faculty}</quote>
                </p>
                <p className="buttons">
                    <button className="update" onClick={()=>{navigate("/profileUpdate")}}>Update profile</button>
                    <button className="addcard" onClick={()=>{navigate("/newskill")}}>Add new card</button>
                    <button className="logout" onClick={()=>{localStorage.removeItem("userInfo")
                navigate("/login")}}>Logout</button>
                </p>
            </div>
            <div className="tagsection">
                <div className="tagList">
                    <h2>Skills and Tags</h2>
                    <p>
                    {skills.map(skill => <em>{skill}</em>)}
                    
                    </p>
                </div>
                <div className="aboutTag">
                    <h2>About</h2>
                    <p>
                    {userDetails.user_description} 
                    </p>
                </div>
            </div>
            <div className="skillList">
               {cardList.length > 0 &&  cardList.map((data)=><Card image={data.image} key={data._id} del={message}
                text={data.description} price={data.price} link={data.social_link} />)}
                {cardList.length === 0 && <h4>You do not any active skill card (0/5 used) </h4>}
            </div>
        </div>
    )
}

export default DashboardLayout;