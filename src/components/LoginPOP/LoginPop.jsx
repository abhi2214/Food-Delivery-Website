import React, { useState } from 'react'
import './LoginPop.css'
import { assets } from '../../assets/assets'

const LoginPop = ({setShowlogin}) => {
    const [currState,setCurrState] = useState("Login")
  return (
    <div className='Login-popup'>
      <form action="" className = "login-popup-container">
        <div className="login-popup-title">
            <h1>{currState}</h1>
            <img onClick = {()=>setShowlogin(false)}src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-input">
            {currState ==="Login"?<></>:<input type="text" placeholder='Your Name' required />}
            
            <input type="email" placeholder='Your Email' />
            <input type="password" placeholder='Enter Password' required />
             </div>
            <button>{currState==="Sign up"?"Create Account":"Login"}</button>
             <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By Continuing , i agree to the trem of use and privacy policy</p>
            </div>
            {currState==="Login"?<p>Create a new acoount?<span onClick={()=>setCurrState("Sign up")}>Click Hare</span></p>:<p>Already Have an Account <span onClick={()=>setCurrState("Login")}>Login Here</span></p>}
      </form>
    </div>
  )
}

export default LoginPop
