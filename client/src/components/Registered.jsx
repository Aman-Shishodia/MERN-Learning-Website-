import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { NavLink,useParams,useNavigate } from "react-router-dom";
import Footer from './Footer'

function Registered() {
    const [data,setData]=useState([])

    const navigate = useNavigate()

    const getData =async()=>{ 
        const r = await axios.get("http://localhost:8001/users")
            setData(r.data)
        }
        useEffect(()=>{
            getData();
            },[])
        
            const deleteUser = async(id)=>{
                const result = await axios.delete(`http://localhost:8001/deleteUser/${id}`)
                if(result.status==200){
                    alert("User Delete")
                    navigate("/home")
                }
            }
  return (
    <div>
         <div className="home-head">
      <h1>ARTech</h1>
      <NavLink to="/about"><button>About</button></NavLink>
      <NavLink to="/register"><button>Register</button></NavLink>
    </div>
        <table border={1}>
            <thead>

                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Organisation</th>
             </tr>
            </thead>
           
                {
                    data.map((user,index)=>{
                        return (
                            <tbody key={index}>
                        <tr>
                        <td>{index+1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.organisation}</td>
                    <td><NavLink to={`/edit/${user._id}`}><button className="table-btn">Edit</button></NavLink></td>
                    <td><button onClick={()=>deleteUser(user._id)} className="table-btn">Delete</button></td>
                    </tr>
                    {/* <td>{user._id}</td> */}
                    </tbody>
                        )
                    })
                        
                }
            

            
        </table>
        <Footer />
    </div>
  )
}

export default Registered;