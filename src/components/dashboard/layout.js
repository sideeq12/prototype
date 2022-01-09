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
               {cardList.length > 0 &&  cardList.map((data)=><Card  image={data.image} key={data._id} showed={true}  id={data._id}
                text={data.description} price={data.price} link={data.social_link} />)}
                {cardList.length === 0 && <h4>You do not any active skill card (0/5 used) </h4>}
            </div>
        </div>
    )
}

export default DashboardLayout;