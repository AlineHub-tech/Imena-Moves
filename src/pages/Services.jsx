import React from "react";
import "../styles/InfoPage.css";
import { FaMusic, FaGuitar, FaLaptop } from "react-icons/fa";

const services = [
  { id:1, icon:<FaMusic/>, title:"Music Classes", desc:"Amahugurwa ya muzika ku bana: vocals, rhythm, and songwriting." },
  { id:2, icon:<FaGuitar/>, title:"Dance Workshops", desc:"Imyitozo ya dance, choreography, n'imyidagaduro." },
  { id:3, icon:<FaLaptop/>, title:"Creative Tech", desc:"Ubumenyi bwa digital: video, audio recording, editing basics." },
];

export default function Services(){
  return (
    <div className="info-root">
      <div className="info-hero">
        <div className="hero-icon">SV</div>
        <div className="hero-text">
          <h1>Our Services</h1>
          <p>Dutanga amahugurwa atandukanye agamije guteza imbere impano z’abana mu byerekeye muzika, dance na creative tech.</p>
        </div>
      </div>

      <div className="card-grid">
        {services.map(s=>(
          <div key={s.id} className="card">
            <div className="card-icon" style={{background:"linear-gradient(135deg,#7c3aed,#06b6d4)"}}>{s.icon}</div>
            <div className="card-body">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="lp-ctas">
            <a href="/learn" className="btn primary">Learn More</a>
            <a href="/about" className="btn ghost">About Us</a>
            <a href="/" className="btn primary">Back Home</a>
          </div>
    </div>
  );
}
