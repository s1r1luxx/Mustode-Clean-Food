import LoginSignup from './LoginSignup/LoginSignup';
import User from './pages/User';
import Conf_Pass from './pages/Conf_Pass';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<User/>} />
        <Route path='/Conf_Pass' element={<Conf_Pass/>} />
      </Routes>
    </Router>
  );
}

export default App;
