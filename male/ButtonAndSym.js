
function ButtonAndSym(){

    const BackButton =(
        <button className="back">
            <div className="ba">
                <p>Back</p>
            </div>
            
        </button>
    );

    return(
        
        <>
        <div className="ok">        
            <img src="/picture/slide/check.png"/>
        </div>
        <div className="task">        
            <img src="/picture/slide/task.png" />   
        </div>
        <div >
            {BackButton}
        </div>

        
        </>
    );
    
}

export default ButtonAndSym;