import React, {useEffect, useState} from "react";
import NavLinks from "../NavLink/navLink";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import "./update.css"


const TemplateList =()=>{

    const url =  "https://learnersconnect.herokuapp.com/api/update"
    const navigate = useNavigate()

    const [details, setDetails ] = useState("")
    const [Error, setError] = useState("")

    const dataChange = (e)=>{
        const deta = e.target.value;
        setDetails(deta)
    }
    const send = (e)=>{
       const usermail = localStorage.getItem("userInfo")
       const userEmail = JSON.parse(usermail).email
        e.preventDefault()
        const userdeta = {
            details : details,
            user : userEmail
        }
        if(details !== "" && details.length > 50){
            axios.post(url, userdeta, Headers).then(response =>{
                if(response.data.message === "success"){
                    navigate("/dashboard")
                }else{
                    setError("Error while uploading ...")
                }
         })
            // navigate("/dashboard")
        }else{
            setError("details cannot be less than 50 characters")
        }
    }
    
    return (
        <div className="dashboardWrap">
            <NavLinks /> 
          <div className="form" onSubmit={send}>
              <h2>Update User details</h2>
              <div className="err">{Error}</div>
              <form>
                  <textarea placeholder="start typing" onChange={dataChange} /> <br/>
                  <button type="submit">Update</button>
              </form>
          </div>
            
            </div>
    )
}

export default TemplateList;