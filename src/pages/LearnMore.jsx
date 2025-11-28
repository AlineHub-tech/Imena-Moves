import React from "react";
import "../styles/InfoPage.css";
import { FaPlayCircle, FaLightbulb } from "react-icons/fa";
export default function LearnMore(){
  return (
    <div className="info-root">
      <div className="info-hero">
        <div className="hero-icon">LM</div>
        <div className="hero-text">
          <h1>Learn More — Imena Moves</h1>
          <p>Reba tutorials, short lessons, na activities tugenewe abana n'abarezi.</p>
         </div>
      </div>

      <div className="learn-grid">
        <div className="learn-card">
          <h3>Featured Lesson</h3>
          <p>Video tutorial: "Basics of rhythm for kids" — 10 min</p>
          <div style={{marginTop:12, display:"flex", gap:10}}>
            <button className="btn" style={{padding:"8px 12px", borderRadius:8, border:"none", background:"linear-gradient(90deg,#7c3aed,#06b6d4)", color:"#fff"}}><FaPlayCircle/> Watch</button>
            <button className="btn" style={{padding:"8px 12px", borderRadius:8}}>Download PDF</button>
          </div>
        </div>
        <div className="learn-card">
          <h3>Tips & Activities</h3>
          <ul style={{marginTop:8, paddingLeft:18}}>
            <li>Daily 10-min rhythm practice</li>
            <li>Sing together family time</li>
            <li>Record a short dance and review</li>
          </ul>
        </div>
<div className="lp-ctas">
            <a href="/services" className="btn primary">Our Services</a>
            <a href="/about" className="btn ghost">About Us</a>
            <a href="/" className="btn primary">Back Home</a>
          </div>
      </div>
       </div>
  );
}

