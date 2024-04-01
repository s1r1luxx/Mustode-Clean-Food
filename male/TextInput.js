import './App.css';

function TextInput() {
    const textInput1 =  <input type="text1"/>
    const textInput2 =  <input type="text2"/>
    const textInput3 =  <input type="text3"/>
    

    return ( 
        
        <div className="Input">
            <div className="Weight">
                <div className="w">
                    <p>Weight</p>
                <div/>               
                <div className="t1">
                    <p>{textInput1}</p>
                <div/>
                <div className="k">
                    <p>Kg</p>
                </div>
            </div>       
        </div>
        </div>
  
            <div className="Height">
                <div className="h">
                    <p>Height</p>
                <div/>               
                <div className="t2">
                    <p>{textInput2}</p>
                <div/>
                <div className="m">
                    <p>M</p>
                </div>
            </div>
        </div> 
            </div>
            <div className="Age">
                <div className="a">
                    <p>Age</p>
                <div/>               
                <div className="t3">
                    <p>{textInput3}</p>
                <div/>
                <div className="y">
                    <p>Years old</p>
                </div> 
                </div>               
            </div>
            </div>        
        </div>
        
        
    );
}

export default TextInput;