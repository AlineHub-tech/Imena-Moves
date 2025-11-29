import React, { useState } from 'react';
import '../styles/History.css';
import { useHistory } from "../Context/HistoryContext";
import Sidebar from '../components/Sidebar';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function History() { 
  const { attendanceRecords, members } = useHistory();
  const [darkMode, setDarkMode] = useState(false); 
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [date, setDate] = useState(new Date().toISOString().slice(0,10));

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const list = attendanceRecords.filter(r=> r.date === date);
  const summary = { 
    present: list.filter(l=>l.status==='Present').length, 
    absent: list.filter(l=>l.status==='Absent').length 
  };

  function memberName(id){ 
    const m = members.find(x=>x.id===id); 
    return m ? m.fullName : 'Unknown'; 
  }

  return ( 
    <div className={`page history-page ${darkMode ? 'dark-mode' : ''}`}>
      <Sidebar  />
      <div className='main-content'> 
        <nav className='top-navbar'>
          <h1>History</h1> 
          <div className='nav-actions'>
            <div className='dark-light-toggle' onClick={toggleDarkMode}> 
              {darkMode ? <FaSun /> : <FaMoon />} 
            </div> 
            <button className='sidebar-toggle' onClick={toggleSidebar}></button> 
          </div> 
        </nav>

        <div className='history-controls'>
          <label>Date 
            <input type='date' value={date} onChange={e=>setDate(e.target.value)} />
          </label>
        </div>

        <div className='history-summary'>
          Date: {date} — Present: {summary.present} — Absent: {summary.absent}
        </div>

        <div className='history-list'>
          {list.length === 0 ? 
            <p className='no-history'>There is No History Here</p> 
            : list.map(r => (
              <div className='hist-item' key={r.id}>
                <div className='hist-name'>{memberName(r.memberId)}</div>
                <div className='hist-status'>{r.status} • {r.time}</div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
