
function Text() {

    const MaleButton = (<button className="butMale">MALE</button>)
    const FemaleButton = (<button className="butFemale">FEMALE</button>)

    return (
        <div className="textGen">
            <div className="text1">
                <p>What is your gender?</p>
            </div>
            <div className="picMale"> 
                <img src="/picture/slide/man.png" />
            </div>
            <div>
                {MaleButton}
            </div>
            <div className="picFemale">
                <img src="/picture/slide/girl.png" />
            </div>
            <div>
                {FemaleButton}
            </div>
        </div>
    );
}

export default Text