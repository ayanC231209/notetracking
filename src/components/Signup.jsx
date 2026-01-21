import React from 'react'
import API from '../services/api'
import { useState } from 'react'
import { useNavigate } from 'react-router'


const Signup = () => {
 const [name,setName]=useState("")
const  [email,setEmail]=useState("")
 const [password,setPassword]=useState("")
 const navigate=useNavigate()

 const signup=async ()=>{
await API.post('signup',{name,email,password});
alert('signup successfull')
navigate("/login")
 }
 
 
 
    return (
    <>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Signup</legend>

 <label className="label">Name</label>
  <input type="email" className="input" placeholder="Email" onChange={(e)=>setName(e.target.value)} />

  <label className="label">Email</label>
  <input type="email" className="input" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />

  <label className="label">Password</label>
  <input type="password" className="input" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />

  <button className="btn btn-neutral mt-4" onClick={signup}>done</button>
</fieldset>
    </>
  )
}

export default Signup
