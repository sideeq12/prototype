import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import NavLinks from "../NavLink/navLink";
import "./template.css"
import SkillDB from "../dashboard/skillDB";
import Card from "../dashboard/card";


const TemplateList =()=>{
    return (
        <div className="dashboardWrap">
            <NavLinks /> 
            <div className="templist">
                <h2>Template List</h2>
                <div className="search">
                    <form>
                        <input type="text" required/>
                        <select>
                            <option>Category</option>
                            <option>Academic</option>
                            <option>Non Academics</option>
                            <option>Random</option>
                        </select>
                        <button type="submit">Search</button>
                    </form>
                </div>
                <div className="mainList">
                    {SkillDB.map((data)=><Card image={data.image} key={data.id} text={data.Text} price={data.amount} />)}
                </div>
            </div>
            </div>
    )
}

export default TemplateList;