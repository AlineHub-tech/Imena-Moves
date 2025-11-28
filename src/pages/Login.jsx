import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Auth.css";

export default function LoginPage(){
  const [email,setEmail]=useState("");
  const [pass,setPass]=useState("");
  const navigate=useNavigate();

  const submit=(e)=>{ e.preventDefault(); if(email && pass){ alert("Logged in (mock)"); navigate("/dashboard");
   } else alert("Fill fields"); }

  return (
    <div className="auth-root">
      <div className="auth-card">
        <h2>Welcome back</h2>
        <form onSubmit={submit}>
          <label>Email</label>
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@mail.com" />
          <label>Password</label>
          <input type="password" value={pass} onChange={e=>setPass(e.target.value)} placeholder="password" />
          <button className="btn primary" type="submit">Login</button>
        </form>
        <p>Don't have account? <Link to="/signup">Sign up</Link></p>
      </div>
    </div>
  );
}
