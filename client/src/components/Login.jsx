import React,{useState} from 'react'
import {  NavLink,useNavigate} from "react-router-dom";
import axios from 'axios'
import './Style.css'
function Page() {
    const navigate = useNavigate()
    const [input,setInput]=useState({
        email:"",
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
      const enterHome = async(e)=>{
          e.preventDefault();
          const {email,password} = input;
          console.log(input)
            if(email==""){
                alert("Enter email")
            }else if(password==""){
                alert("Enter passsword")
            }else{ 
          const data = await axios.post("http://localhost:8001/login",input).then((res)=>{
              if(res.status==200){
                  navigate("/home")
              }
              else(
                  alert("Inavild Input")
              )
          })
        }
      }
  return (
    <div className="page">
        <div className="page-left">
            <div className="page-left-content">
                <h1>Sign In</h1>
                <form action="">
                   
                    <input type="email" name="email" placeholder="Your Email address" onChange={updateInput} /><br /> 
                    <input type="password" name="password" placeholder="Enter password" onChange={updateInput} /><br />
                    <NavLink><button className="page-signin-btn" onClick={enterHome}>SIGN IN</button></NavLink>

                </form>
                <p>Best supported on latest version of Chrome, Firefox and Safari</p>
            </div>
        </div>
        <div className="page-right">
            <div className="page-right-content">
                <h1>Hello</h1>
                <h3>Enter your personal details and start</h3> 
                <h3>the journey with us.</h3> 
                <NavLink to="/register"><button className="page-signup-btn" >SIGN UP</button></NavLink>
            </div>
        </div>
    </div>
  )
}

export default Page