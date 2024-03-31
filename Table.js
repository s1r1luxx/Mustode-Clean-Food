import React from 'react'
import NAVBar from '../Components/NAVBar'
import '../Components/NAVBar.css'
import './Table.css'

function Table() {
  return (
    <div><NAVBar/>
        <div className="Header">
                <h1>
                    Sample Plan
                </h1>
            </div>
            <div className="Text">
                <text>
                    Date: 
                </text>
                <text>
                    Total calories: 
                </text>
            </div>
        <div className='container'>
            <div className="Box">
                <h2>
                    Breakfast
                </h2>
                <div className="inf">
                    <text>
                        Menu's Name
                    </text>
                    <text>
                        Calories: 
                    </text>
                    <text>
                        proteins: 
                    </text>
                    <text>
                        carbs: 
                    </text>
                    <text>
                        fats: 
                    </text>
                </div>
            </div>
            <div className="Box">
                <h2>
                    Lunch
                </h2>
                <div className="inf">
                    <text>
                        Menu's Name
                    </text>
                    <text>
                        Calories: 
                    </text>
                    <text>
                        proteins: 
                    </text>
                    <text>
                        carbs: 
                    </text>
                    <text>
                        fats: 
                    </text>
                </div>
            </div>
            <div className="Box">
                <h2>
                    Dinner
                </h2>
                <div className="inf">
                    <text>
                        Menu's Name
                    </text>
                    <text>
                        Calories: 
                    </text>
                    <text>
                        proteins: 
                    </text>
                    <text>
                        carbs: 
                    </text>
                    <text>
                        fats: 
                    </text>
                </div>
            </div>
        </div>
        <div className="inputs">
            <div className="input">
                <text>
                    Note:
                </text>
                <input placeholder="_____________________________________________________________"/>
            </div>
            <div className="input2">
                <text>
                    Weight
                </text>
                <input placeholder=" "/>
                <text>
                    kg
                </text>
            </div>
        </div>
        <div className="button">
            Back
        </div>
    </div>
  );
};

export default Table