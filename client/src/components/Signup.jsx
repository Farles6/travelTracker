import { useState } from "react";
import './Login.css'

export default function Signup() {
  const [email , setEmail] = useState('')
  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')
  const [password, setPassword] = useState('')
  
 
  return (
    <div>
      <div className="split left authPage ">
        <div className="centered">
          <strong>Signup</strong>
        <form className="authForm" onSubmit={e => e.preventDefault()}>
        <label clasname="test">Email:</label>
        <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter Email Here"/>
        <label clasname="test">First Name:</label>
        <input type='text' value={fName} onChange={e => setFName(e.target.value)} placeholder="First Name Here"/>
        <label clasname="test">Last Name:</label>
        <input type='text' value={lName} onChange={e => setLName(e.target.value)} placeholder='Enter Last Name Here'/>
        <label clasname="test">Password:</label>
        <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter Password Here"/>
        </form>
        <button type="submit">Login</button>
        </div>
      </div>
      <div className="split right">
        <div className="centered">
        Hello
        </div>
      </div>
    </div>
  );
}
