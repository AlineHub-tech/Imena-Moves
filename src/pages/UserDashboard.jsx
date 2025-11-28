import React, { useEffect, useState } from "react";
import "../styles/Dashboard.css";
import { AppProvider } from '../Context/AppContext';
export default function UserDashboard() {
  const [attendance,setAttendance] = useState([]);
  const [members,setMembers] = useState([]);
  const [ann,setAnn] = useState([]);
  const [aba,setAba] = useState([]);
  const [moves,setMoves] = useState([]);

  useEffect(()=>{
    setAttendance(JSON.parse(localStorage.getItem("attendance")||"[]"));
    setMembers(JSON.parse(localStorage.getItem("members")||"[]"));
    setAnn(JSON.parse(localStorage.getItem("announcements")||"[]"));
    setAba(JSON.parse(localStorage.getItem("collaboration")||"[]"));
    setMoves(JSON.parse(localStorage.getItem("entertainment")||"[]"));
  },[]);

  const today = new Date().toISOString().slice(0,10);
  const presentToday = attendance.filter(a=>a.status==="Present" && a.date===today).length;
  const absentToday = attendance.filter(a=>a.status==="Absent" && a.date===today).length;

  return (
    <AppProvider>
    <div className="dash-roo">
      <h1>UserDashboard Overview</h1>
      <div className="lp-ctas">
            <a href="/services" className="btn primary">Our Services</a>
            <a href="/about" className="btn ghost">About Us</a>
            <a href="/" className="btn primary">Back Home</a>
          </div>
      <div className="dash-sta">
        <div className="dash-cardi attendance">
          <div className="dash-title">Attendance Today</div>
          <div className="dash-num">{presentToday} Present / {absentToday} Absent</div>
        </div>
        <div className="dash-cardi members">
          <div className="dash-title">Total Members</div>
          <div className="dash-num">{members.length}</div>
        </div>
        <div className="dash-card announcements">
          <div className="dash-title">Announcements</div>
          <div className="dash-num">{ann.length}</div>
        </div>
        <div className="dash-cardi aba">
          <div className="dash-title">ABA / Collaboration</div>
          <div className="dash-num">{aba.length}</div>
        </div>
        <div className="dash-cardi moves">
          <div className="dash-title">Imena Moves</div>
          <div className="dash-num">{moves.length}</div>
        </div>
      </div>

      <div className="dash-quicky">
        <div className="quick-cardi">
          <div className="quick-title">Recent Attendance</div>
          {attendance.slice(0,5).map(a=>(
            <div key={a.id} className="quick-item">{a.name} - {a.status} ({a.date})</div>
          ))}
        </div>
        <div className="quick-cardi">
          <div className="quick-title">Recent Announcements</div>
          {ann.slice(0,5).map(a=>(
            <div key={a.id} className="quick-item">{a.title}</div>
          ))}
        </div>
      </div>
    </div>
    </AppProvider>
  );
}
