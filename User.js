import React, { useState, useRef } from 'react'
import NAVBar from '../Components/NAVBar'
import "../Components/NAVBar.css"
import "./User.css"

import user_icon from '../Pictures/user.png'
import box from '../Pictures/round-corner.png'

function User() {
    const inputRef = useRef(null);
    const[image, setImage] = useState("");
    const handleImageClick = () =>{
        inputRef.current.click();
    };
    const handleImageChange = (event) =>{
        const file = event.target.files[0];
        console.log(file);
        setImage(event.target.files[0]);
    };

    const handleClick = useState("");

  return (
    <div><NAVBar/>
        <div classname='container'>
            <div className="image-upload-container">
                <div onClick={handleImageClick} style={{cursor:"pointer"}}>
                {image ? 
                    (<img src={URL.createObjectURL(image)}alt = ""  className="img-display-after" />)
                    : (<img src={user_icon} alt="" className="img-display-before"></img>)}
                    <input 
                    type="file" 
                    ref={inputRef} 
                    onChange={handleImageChange} 
                    style={{display: "none"}}>
                    </input>
                </div>
                <text>
                    Username : ______________
                </text>
                <button1 onClick={handleClick} >
                    <img src={box}></img>
                    Change Password
                </button1>
                <button2 onClick={handleClick}>
                    <img src={box}></img>
                    Edit plan
                </button2>
            </div>
            
        </div>
        <div className="button">
            <button3 onClick={handleClick}>
                Back
            </button3>
        </div>
    </div>
    )
}

export default User