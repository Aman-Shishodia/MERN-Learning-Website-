import {  Routes,Route } from "react-router-dom";
import './App.css';

import Root from './components/Root'
import Login from "./components/Login";
import Register from './components/Register'
import Home from "./components/Home";
import Registered from './components/Registered'
import About from './components/About'
import Edit from './components/Edit'
function App() {
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register /> } />
      <Route path="/registered" element={<Registered /> } />
      <Route path="/home" element={<Home /> } />
      <Route path="/about" element={<About /> } />
      <Route path="/edit/:id" element={<Edit /> } />
    </Routes>
    
    </>
  );
}

export default App;
