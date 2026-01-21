import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import API from '../services/api'

const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate = useNavigate()

  const login= async ()=>{
try{
    const res=await API.post('/login',{email,password})
    localStorage.setItem("email",res.data.email)
    navigate("/notes")
} catch{
    alert("invalid credential")
}

  }
  
    return (
    <div>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Login</legend>

  <label className="label">Email</label>
  <input type="email" className="input" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />

  <label className="label">Password</label>
  <input type="password" className="input" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} />

  <button className="btn btn-neutral mt-4" onClick={login}>Login</button>
</fieldset>
    </div>
  )
}

export default Login
