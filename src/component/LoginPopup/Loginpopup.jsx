import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

function Loginpopup({setshowLogin}) {
    const [currState,setcurrState] = useState("Login")
  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setshowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==="Login"?<></>:<input type="text" placeholder='Name' required />}
                <input type="text" placeholder='Email' required />
                <input type="text" placeholder='Password' required />
            </div>
            <button className='login-wala-btn'>{currState==="Sign Up"?"Create Account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By Continuing Agreed to the Terms and condition</p>
            </div>
            {currState==="Login"? <p>Create a new Account?<span onClick={()=>setcurrState("Sign Up")}>Click Here</span></p>:<p>Already have an Account?<span onClick={()=>setcurrState("Login")}>Login</span></p>}
           
            
        </form>
    </div>
  )
}

export default Loginpopup