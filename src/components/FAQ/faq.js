import React from "react";
import NavLinks from "../NavLink/navLink";
import "./faq.css"
import support from "./support.jpg"


const About =()=>{
    return (
        <div className="dashboardWrap">
            <NavLinks /> 
            <div className="AboutWrapper">
                <img src={support} alt="support image" />
                <div className="Textabout">
                    <h2>About</h2>
                    <p>ABOUT

Learner's Connect is an awesome website that connects you to the world of skillful and smart students who wish to render their ablities to those in need of them.
Can't afford the price for tutorials elsewhere? No worries because you'll find friends in Learner's Connect who are willing to help you out with little or no price attached
Be assured that there is no difficulty in using Learner's Connect so buckle yourself you learner for young experts are ready to teach you!


We're simply your motivation to make positive impact to the society. Join us and advertise your skills, eager learners are in need of them out there!
Learner's Connect allows folks searching for tutorials relating to academics to contact fellow students who are willing to teach other's on various courses

What is the reality of this?

Now a part 1 student who is very good at CHM101 will not just know it but teach other's and earn money, isn't it wonderful?
Also a  Mozambique queen who bakes cupcakes can attract students interested in baking easily via Learner's Connect. 

Tired of advertising and not receiving calls using social media?
Why don't you try Learner's Connect, where learners and tutors have the closest access and fastest access  to each other






The Team
We are students of computer science and engineering Part 2. We greatly desire to learn and earn, empower and educate others.
We are a bridge connecting learners earners and tutors in the most incredible way.

Our intentions
We get your skills swiftly to the feet of hungry learners
We create an efficient channel of income for students as they go about their studies in campus
We help students in need of help either academically or non- academically, by tutoring on their prospective weak subjects





                    </p>
                </div>
            </div>
            </div>
    )
}

export default About;