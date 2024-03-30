import React ,{useState} from 'react'
import NAVBar from '../Components/NAVBar'
import "../Components/NAVBar.css"
import "./Conf_Pass.css"

import check from '../Pictures/check (1).png'

function Conf_Pass() {
    const handleClick = useState("");

  return (
    <div><NAVBar/>
        <div className='Container'>
            <div className="Header">
                <h1>Change Password</h1>
            </div>
            <div className="Text">
                <text>Change Password</text>
            </div>
            <div className="inputs">
                <div className="input">
                    <input placeholder=""></input>
                </div>
                <div className="Text">
                    <text>Confirm Password</text>
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
    </div>
  );
};

export default Conf_Pass