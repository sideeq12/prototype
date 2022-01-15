import React, {useEffect, useState} from "react";
import NavLinks from "../NavLink/navLink";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import "./template.css"
import Card from "../dashboard/card";


const TemplateList =()=>{

    const url =  "https://learnersconnect.herokuapp.com/api/allCard"
    const navigate = useNavigate()
    const [skill, setSkill ] = useState([])
    const [check, setCheck] =useState(false)
    const [optionValue, setOptionValue] = useState("");
    const [searchData, setSearchData] = useState("")
    const [store, setStore] = useState([])

    if(localStorage.getItem("userInfo")===null){
        navigate("/login")
    }
    useEffect(()=>{
      
    })
    const Headers = {
        Headers : {
            'Content-Type': 'Application/json'
        }
    }
    if(check === false){
        async function getCard() {
            axios.get(url, Headers).then(response =>{
                if(response.data.message === "success"){
                    if(response.data.message === "success"){
                        const List = response.data.data;
                        setSkill(List)
                        setStore(List)
                    }
                   
                }
         })
        }
        getCard()
        setCheck(true)
    }
    const option = (e)=>{
        setOptionValue(e.target.value)
    }
    const searchQuery = (e)=>{
        setSearchData(e.target.value)
    }
    const search = ()=>{
      if(optionValue === "title" && searchData.length>1){
          console.log("working")
        const result = skill.filter(skillresult => skillresult.description.includes(searchData))
        setSkill(result)
        console.log("result is ", result, "and skill is ", skill)
        console.log(optionValue)
      }
       if(optionValue !== "title"){
          console.log("store is here in all", store)
          
          console.log(optionValue)
          setSkill(store)
          console.log("skill is ", skill)
      }
    }
    return (
        <div className="dashboardWrap">
            <NavLinks /> 
          
            <div className="skillWrap">
                <div className="skill"> 
                <h2>Latest skill template List</h2>
                <div className="searchSection">
                    <input type="text" placeholder="search for skill..." required onChange={searchQuery} /> 
                    <select onChange={option}>
                        <option>options</option>
                        <option value="title">Search by title</option>
                        <option value="all">Show all</option>
                    </select> <button onClick={search}>Search</button>
                </div>
                <div className="latest">
                <h3>skills offer list </h3>
                <div className="cardList">
                {(skill.length > 1) && skill.map((data)=><Card image={data.image} key={data._id} text={data.description} price={data.price} link={data.social_link} />)}
                </div>
            </div></div>
            </div>
            
            </div>
    )
}

export default TemplateList;