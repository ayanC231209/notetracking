import React from 'react'
import { Link, useNavigate } from 'react-router'

const Navbar = () => {

const navigate=useNavigate()
const userEmail=localStorage.getItem("email");

const logout = ()=>{

localStorage.removeItem("email")
navigate("/login");

}
let navcontent
 if(!userEmail){
   navcontent= (
   <>
<ul className="menu menu-horizontal px-1">
      <li><Link to='signup'>Signup</Link></li>
       <li><Link to='login'>Login</Link></li>
    </ul>
   </>
   
    )
   }
   else{
    navcontent= (
    <>
<ul className="menu menu-horizontal px-1">
      <li><Link to='notes'>notes</Link></li>
       <button onClick={logout} className=''>Logout</button>
    </ul>
    </>
    
    )
   }
  

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Notes</a>
  </div>
  <div className="flex-none">
 {navcontent}
  </div>
</div>
    </div>
  )
}

export default Navbar
