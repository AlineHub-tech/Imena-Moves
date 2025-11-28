import Sidebar from '../components/Sidebar';
import React from "react";
import "../styles/History.css";
import { FaCalendarAlt, FaAward, FaStar } from "react-icons/fa";

const historyData = [
  {
    id:1,
    year:2023,
    title:"First Dance Workshop",
    desc:"Abana barenga 50 bitabiriye imyitozo ya mbere ya dance workshop muri Kigali.",
    icon:<FaCalendarAlt/>
  },
  {
    id:2,
    year:2024,
    title:"Music Competition",
    desc:"Hateguwe amarushanwa ya muzika aho abana bagaragaje impano zabo imbere y’abarezi n’ababyeyi.",
    icon:<FaAward/>
  },
  {
    id:3,
    year:2025,
    title:"Talent Showcase",
    desc:"Abana 100 berekanye impano zabo muri stage yateguwe na Imena Moves, harimo dance, vocals, n’instrumental.",
    icon:<FaStar/>
  }
];

export default function History(){
  return (
    <div className="history-root">
      <Sidebar/>
      <div className="history-hero">
        <h1>Our History</h1>
        <p>Amwe mu mateka n’ibikorwa by’ingenzi bya Imena Moves kuva yatangira.</p>
      </div>

      <div className="timeline-container">
        {historyData.map((item, idx)=>(
          <div key={item.id} className={`timeline-item ${idx%2===0 ? "left":"right"}`}>
            <div className="timeline-icon">{item.icon}</div>
            <div className="timeline-content">
              <h3>{item.year} — {item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="card-grid">
        {historyData.map(item=>(
          <div key={item.id} className="card">
            <div className="card-icon">{item.icon}</div>
            <div className="card-body">
              <h3>{item.year} — {item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

