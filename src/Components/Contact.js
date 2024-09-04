import React from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import About from "./About";

function Contact(){
const age = "21"
    return (
    <div className='Contact'>
    <h1>Contact</h1>
    <About name1={age}/>
    </div>
    );
 }
 export default Contact;