import React from "react";
import { Link } from 'react-router-dom';
import "../styles/InfoPage.css";
import { FaChild, FaHeart, FaGlobe } from "react-icons/fa";

export default function About(){
  return (
    <div className="info-root">
      <div className="info-hero">
        <div className="hero-icon">IM</div>
        <div className="hero-text">
          <h1>Imena Moves — About</h1>
          <p>Imena Moves ni gahunda y’uburezi n’imyidagaduro y’abana, itanga ibikorwa bya muzika, dance, n’imyitozo ifasha abana gukura bafite impano.</p>
        </div>
      </div>

      <div className="card-grid">
        <div className="card">
          <div className="card-icon" style={{background:"linear-gradient(135deg,#06b6d4,#7c3aed)"}}><FaChild/></div>
          <div className="card-body">
            <h3>Child-centered</h3>
            <p>Dushyira abana imbere mu myitozo, gahunda zibategurira kuzamura impano zabo neza.</p>
          </div>
        </div>

        <div className="card">
          <div className="card-icon" style={{background:"linear-gradient(135deg,#f97316,#ef4444)"}}><FaHeart/></div>
          <div className="card-body">
            <h3>Care & Values</h3>
            <p>Turigisha indangagaciro, kwitanga n’ubugwaneza mu mashuri yacu y’imbyino n’umuziki.</p>
          </div>
        </div>

        <div className="card">
          <div className="card-icon" style={{background:"linear-gradient(135deg,#10b981,#06b6d4)"}}><FaGlobe/></div>
          <div className="card-body">
            <h3>Community</h3>
            <p>Guhuza imiryango n’abarezi kugirango abana babone amahirwe yo kugaragaza impano zabo.</p>
          </div>
        </div>
        <div className="lp-ctas">
            <a href="" className="btn primary"><Link to='/services'>Our Services</Link></a>
            <a href="" className="btn ghost"><Link to='/learn'>Learn More</Link></a>
            <a href="" className="btn primary"><Link to='/about'>Back Home</Link></a>
          </div>
      </div>
    </div>
  );
}

