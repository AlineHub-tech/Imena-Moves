import React, { useEffect, useState } from "react";
import "../styles/Attendance.css";
import Sidebar from '../components/Sidebar';
import { AppProvider } from '../Context/AppContext';
const LS_ATT = "attendance";
const LS_MEM = "members";
const LS_HISTORY = "history";

function uid(pref = "a") {
  return pref + Math.random().toString(36).slice(2, 9);
}

function todayDateTime() {
  const d = new Date();
  return {
    date: d.toISOString().slice(0,10),
    time: d.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})
  };
}

export default function Attendance() {
  const [members, setMembers] = useState([]);
  const [records, setRecords] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 6;

  useEffect(()=>{
    const ms = JSON.parse(localStorage.getItem(LS_MEM)||"[]");
    setMembers(ms);
    const rs = JSON.parse(localStorage.getItem(LS_ATT)||"[]");
    setRecords(rs);
  },[]);

  useEffect(()=>{ localStorage.setItem(LS_ATT, JSON.stringify(records)); }, [records]);

  const [stats, setStats] = useState({present:0, absent:0, total:0});
  useEffect(()=>{
    setStats({
      total: members.length,
      present: records.filter(r=>r.status==="Present").length,
      absent: records.filter(r=>r.status==="Absent").length
    });
  }, [records, members]);

  function markAttendance(member,status){
    const {date,time} = todayDateTime();
    // check if already exists today
    const exists = records.find(r=>r.memberId===member.id && r.date===date);
    if(exists){
      setRecords(prev => prev.map(r=>r===exists ? {...r,status,time} : r));
    }else{
      setRecords(prev=>[...prev,{id:uid(),memberId:member.id, name:member.fullName, status,date,time}]);
    }
    // add history
    const history = JSON.parse(localStorage.getItem(LS_HISTORY)||"[]");
    history.unshift(`{id:uid(), action:Marked ${member.fullName} as ${status}, date:new Date().toISOString()}`);
    localStorage.setItem(LS_HISTORY, JSON.stringify(history));
  }

  // Filter & Pagination
  const filtered = members.filter(m=>{
    const q = search.toLowerCase();
    return m.fullName.toLowerCase().includes(q) || m.talent.toLowerCase().includes(q);
  });
  const totalPages = Math.max(1, Math.ceil(filtered.length/perPage));
  const pageItems = filtered.slice((page-1)*perPage,page*perPage);

  return (
    <AppProvider>
    <div className="attendance-root">
      <Sidebar/>
      <h1>Attendance</h1>
            <div className="attendance-controls">
        <input placeholder="Search members..." value={search} onChange={e=>{ setSearch(e.target.value); setPage(1); }} />
      </div>
      <div className="attendance-stats">
        <div className="card stat">
          <div>Total</div>
          <div className="stat-number">{stats.total}</div>
        </div>
        <div className="card stat present">
          <div>Present</div>
          <div className="stat-number">{stats.present}</div>
        </div>
        <div className="card stat absent">
          <div>Absent</div>
          <div className="stat-number">{stats.absent}</div>
        </div>
      </div>
      <div className="attendance-list">
        {pageItems.map(m=>{
          const todayRecord = records.find(r=>r.memberId===m.id && r.date===todayDateTime().date);
          const status = todayRecord ? todayRecord.status : "None";
          return (
            <div key={m.id} className={`attendance-card ${status.toLowerCase()}`}>
              <div className="att-left">
                <div className="att-name">{m.fullName}</div>
                <div className="att-talent">{m.talent}</div>
              </div>
              <div className="att-right">
                <div className="att-buttons">
                  <button className={`btn present ${status==="Present"?"active":""}`} onClick={()=>markAttendance(m,"Present")}>Present</button>
                  <button className={`btn absent ${status==="Absent"?"active":""}`} onClick={()=>markAttendance(m,"Absent")}>Absent</button>
                </div>
                {status!=="None" && <div className="att-time">{todayRecord.time}</div>}
              </div>
            </div>
          )
        })}
      </div>

      <div className="pagination">
        <button disabled={page===1} onClick={()=>setPage(p=>Math.max(1,p-1))}>Prev</button>
        <span>Page {page} of {totalPages}</span>
        <button disabled={page===totalPages} onClick={()=>setPage(p=>Math.min(totalPages,p+1))}>Next</button>
      </div>
    </div>
    </AppProvider>
  );
}
