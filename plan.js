import Nav from "./NAVBar.js"
import "./plan.css"
import Profile from './Pictures/login.png'

function App() {
    return (
        <div><Nav/>
            <div className="greenbox">
                <div className='headbox'>
                    <h1 className ='head1'>YOUR PLAN</h1>
                    </div>
                <div className='Caloriesbox'>
                    <p className='p1'>Clories about</p>
                    <p className='highlight'>1500</p>
                    <p className='p2'>kcal</p>
                    <div className='underline'>.</div>
                </div>
            </div>
            <div className='yellow'><p className='h1'>Choose Plan For Each Day:</p></div>
            <div className="weekday">
        <button className="mon"><p className="day">Mon</p></button>  
        <button className="tues"><p className="day">Tues</p></button>
        <button className="wed"><p className="day">Wed</p></button>
        <button className="thurs"><p className="day">Thurs</p></button>
        <button className="fri"><p className="day">Fri</p></button>
        <button className="sat"><p className="day">Sat</p></button>
        <button className="sun"><p className="day">Sun</p></button>
        </div>
                    <div className="profile">
                    <button className="pro">
                    <img src={Profile}>
                    </img>
                    </button>
                    </div>
        </div>
    );
  }
  
  export default App;