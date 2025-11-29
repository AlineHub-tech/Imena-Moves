import React, { useEffect, useState } from "react";
import "../styles/Dashboard.css";
import { AppProvider } from '../Context/AppContext';
import Sidebar from '../components/Sidebar';
import { HistoryProvider } from "../Context/HistoryContext";
export default function Dashboard() {
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
      <HistoryProvider>
    <div className="dash-root">
      <Sidebar/>
      <h1>Dashboard Overview</h1>
      <div className="dash-stats">
        <div className="dash-card attendance">
          <div className="dash-title">Attendance Today</div>
          <div className="dash-num">{presentToday} Present / {absentToday} Absent</div>
        </div>
        <div className="dash-card members">
          <div className="dash-title">Total Members</div>
          <div className="dash-num">{members.length}</div>
        </div>
        <div className="dash-card announcements">
          <div className="dash-title">Announcements</div>
          <div className="dash-num">{ann.length}</div>
        </div>
        <div className="dash-card aba">
          <div className="dash-title">ABA / Collaboration</div>
          <div className="dash-num">{aba.length}</div>
        </div>
        <div className="dash-card moves">
          <div className="dash-title">Imena Moves</div>
          <div className="dash-num">{moves.length}</div>
        </div>
      </div>

      <div className="dash-quick">
        <div className="quick-card">
          <div className="quick-title">Recent Attendance</div>
          {attendance.slice(0,5).map(a=>(
            <div key={a.id} className="quick-item">{a.name} - {a.status} ({a.date})</div>
          ))}
        </div>
        <div className="quick-card">
          <div className="quick-title">Recent Announcements</div>
          {ann.slice(0,5).map(a=>(
            <div key={a.id} className="quick-item">{a.title}</div>
          ))}
        </div>
      </div>
    </div>
    </HistoryProvider>
    </AppProvider>
  );
}
