import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Auth.css";

export default function SignupPage(){
  const [name,setName]=useState(""); const [email,setEmail]=useState(""); const [pass,setPass]=useState("");
  const navigate=useNavigate();
  const submit=(e)=>{ e.preventDefault(); if(name && email && pass){ alert("Account created (mock)"); navigate("/login"); } else alert("Fill fields"); }

  return (
    <div className="auth-root">
      <div className="auth-card">
        <h2>Create account</h2>
        <form onSubmit={submit}>
          <label>Full name</label>
          <input value={name} onChange={e=>setName(e.target.value)} placeholder="Your name" />
          <label>Email</label>
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@mail.com" />
          <label>Password</label>
          <input type="password" value={pass} onChange={e=>setPass(e.target.value)} placeholder="password" />
          <button className="btn primary" type="submit">Sign up</button>
        </form>
        <p>Already have account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}