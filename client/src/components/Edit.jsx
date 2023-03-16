import React,{ useState,useEffect} from 'react';
import axios from 'axios';
import { useParams,useNavigate,NavLink } from 'react-router-dom';
import Footer from "./Footer";
import demo from '../Img/demo.png'
const Edit = () => {
  const navigate=useNavigate()
  
  const [data,setData]= useState({ 
    name:"",
    email:"",
    organisation:"",
    password:""
})
const {id} = useParams()
    // console.log(id)
const updateInput = (e)=>{
    const { name , value } = e.target;
    setData(()=>{
      return{ 
        ...data,
        [name]:value
      }
    })
  }
const getData =async()=>{ 
  const r = await axios.get(`http://localhost:8001/user/${id}`)
      setData(r.data)
  }
  useEffect(()=>{
      getData();
      },[])

    
    const sendUserData = async(e)=>{
    e.preventDefault();
    const {name,email,organisation,password}=data;
    console.log(name,email,organisation,password);
    const result= await axios.patch(`http://localhost:8001/user/${id}`,data).then((r)=>{
      if(r.status==200){
        alert("Updated")
        navigate("/registered")
      }
    })
  }
  return (
    <>
     <div className="home-head">
      <h1>ARTech</h1>
      <NavLink to="/about"><button>About</button></NavLink>
      <NavLink to="/register"><button>Register</button></NavLink>
    </div>
    <div className="edit-page">
      <img src={demo} alt="" />
        <form action="">
                  <input type="text" placeholder="Full Name" name="name" value={data.name} onChange={updateInput} />
                  <input type="email" placeholder="Your email address" name="email" value={data.email} onChange={updateInput} /><br />
                  <input type="text" placeholder="Organisation Name" name="organisation" value={data.organisation} onChange={updateInput} />
                  <input type="password" placeholder="Enter password" name="password" value={data.password} onChange={updateInput} />
                <button className="register-signup-btn" onClick={sendUserData} className="edit-btn">Save</button>
        </form>
    </div>
    <Footer />
    </>
  )
}

export default Edit;