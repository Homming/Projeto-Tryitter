
import './App.css';
import Login from './pages/Login/Login';
import HomePage from './pages/Home/HomePage';
import Profile from './pages/Profile/Profile';
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Routes>
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/home" element={ <HomePage /> } />
      <Route exact path="/profile" element={ <Profile /> } />
    </Routes>
  );
}

export default App;
