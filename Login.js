import React ,{useState} from 'react'
import NAVBar from './NAVBar.js'
import "./NAVBar.css"
import "./Login.css"
import check from './Pictures/check (1).png'
import Loginpng from './Pictures/login.png'

function Conf_Pass() {
    const handleClick = useState("");

  return (
    <div><NAVBar/>
        <div className='Container'>
            <div className="Header">
                <h1>Login</h1>
            </div>
            <div className="Text">
                <text>Username</text>
            </div>
            <div className="inputs">
                <div className="input">
                    <input placeholder=""></input>
                </div>
                <div className="Text2">
                    <text>Password</text>
                </div>
                <div className="input">
                    <input placeholder=""></input>
                </div>
            </div>
        </div>
        <div className="button_back">
            <button1 onClick={handleClick}>
                Back
            </button1>
            <div className="button_check">
                <button3 onClick={handleClick}>
                    <img src={check}></img>
                </button3>
            </div>
        </div>
            <div>
                <img className='Loginpng' src={Loginpng}></img>
            </div>
    </div>
  );
};

export default Conf_Pass