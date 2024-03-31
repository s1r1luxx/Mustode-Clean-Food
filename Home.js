import React, {useState} from "react";
import logoo from './assets/logo.png'
import Button from './Homebotton'
import './Home.css'
import {Link, Outlet} from "react-router-dom"
function Home(){
    
    return(<>
    
    
    <div className="hi">    
        <h2 className="w1">welcome to</h2>
        <h1 className="w2">MUSTODE CLEAN FOOD</h1>
        <Link to="/login"> 
            <div className="hi2">
                <button className="button1">Login</button>      or
                <button className="button2">register</button>
            </div>
        </Link>       
        <Outlet/>       
    </div>
    <img className="logo" src={logoo} alt="logo"></img>
   
</>
    );
}
export default Home