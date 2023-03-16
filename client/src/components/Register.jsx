import React,{useState} from 'react'
import './Style.css'
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
// import './reg.css'
function Reg() {
  const navigate = useNavigate()
  const [input,setInput]=useState({
    name:"",
    email:"",
    organisation:"",
    password:""
  })
  const updateInput = (e)=>{
    const { name , value } = e.target;
    setInput(()=>{
      return{ 
        ...input,
        [name]:value
      }
    })
  }
  const sendUserData = async(e)=>{
    e.preventDefault();
    const {name,email,organisation,password}=input;
    console.log(name,email,organisation,password);
    const result= await axios.post("http://localhost:8001/register",input).then((r)=>{
      if(r.status==200){
        navigate("/home")
      }
    })
  }
  return (
    <div className="register">
        <div className="register-content">
            <div className="register-left">
                <div className="register-left-content">
                <h1>Welcome</h1>
                <h3>Enter your personal details and start</h3>
                <h3> the journey with us</h3>
                <p>or</p>
                <NavLink to="/login"><button className="register-signin-btn">Sign In</button></NavLink>
                </div>
            </div>
            <div className="register-right">
                <div className="register-right-content">
                <h1>Sign Up For 15 Days Free Trial</h1>
                <h4>No credit card required !!</h4>
                <form action="">
                  <input type="text" placeholder="Full Name" name="name" onChange={updateInput} />
                  <input type="email" placeholder="Your email address" name="email" onChange={updateInput} /><br />
                  <input type="text" placeholder="Organisation Name" name="organisation" onChange={updateInput} />
                  <input type="password" placeholder="Enter password" name="password" onChange={updateInput} />
                </form>
                <p>By signing up, you agree to our Terms of Service and Privacy Policy</p>
                <button className="register-signup-btn" onClick={sendUserData}>SIGN UP</button>
                <p>Best supported on latest version of Chrome, Firefox and Safari</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reg