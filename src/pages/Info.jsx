import React, { useEffect, useState } from "react";
import "../styles/Entertainment.css";
import Sidebar from '../components/Sidebar';
import { AppProvider } from '../Context/AppContext';
import { HistoryProvider } from "../Context/HistoryContext";
const LS_ENT = "entertainment";

function uid(pref="e"){ return pref + Math.random().toString(36).slice(2,9); }

export default function Info() {
  const [moves,setMoves] = useState([]);
  const [name,setName] = useState("");
  const [desc,setDesc] = useState("");
  const [time,setTime] = useState("");
  const [editId,setEditId] = useState(null);
  const [search,setSearch] = useState("");
  const [page,setPage] = useState(1);
  const perPage = 6;

  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem(LS_ENT)||"[]");
    setMoves(data);
  },[]);

  useEffect(()=>{ localStorage.setItem(LS_ENT, JSON.stringify(moves)); }, [moves]);

  function handleSubmit(e){
    e.preventDefault();
    if(editId){
      setMoves(prev=>prev.map(m=>m.id===editId ? {id:editId,name,desc,time}:m));
      setEditId(null);
    }else{
      setMoves(prev=>[{id:uid(), name,desc,time}, ...prev]);
    }
    setName(""); setDesc(""); setTime("");
  }

  function handleEdit(m){
    setEditId(m.id); setName(m.name); setDesc(m.desc); setTime(m.time);
  }

  function handleDelete(id){
    setMoves(prev=>prev.filter(m=>m.id!==id));
  }

  // Filter & Pagination
  const filtered = moves.filter(m=>m.name.toLowerCase().includes(search.toLowerCase()) || m.desc.toLowerCase().includes(search.toLowerCase()));
  const totalPages = Math.max(1, Math.ceil(filtered.length/perPage));
  const pageItems = filtered.slice((page-1)*perPage,page*perPage);

  return (
    <AppProvider>
      <HistoryProvider>
    <div className="settings-root">
        <Sidebar/>
      <h1>Entertainment / Imena Moves</h1>
      <div className="stats-card total">Total Moves: {moves.length}</div>

      <form className="move-form" onSubmit={handleSubmit}>
        <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} required />
        <textarea placeholder="Description" value={desc} onChange={e=>setDesc(e.target.value)} required/>
        <input placeholder="Time / Duration" value={time} onChange={e=>setTime(e.target.value)} required/>
        <button type="submit">{editId ? "Update" : "Add"} Move</button>
      </form>

      <div className="move-search">
        <input placeholder="Search moves..." value={search} onChange={e=>{setSearch(e.target.value); setPage(1);}}/>
      </div>

      <div className="move-list">
        {pageItems.map(m=>(
          <div key={m.id} className="move-card">
            <div className="move-left">
              <div className="move-name">{m.name}</div>
              <div className="move-desc">{m.desc}</div>
              <div className="move-time">{m.time}</div>
            </div>
            <div className="move-right">
              <button className="btn edit" onClick={()=>handleEdit(m)}>Edit</button>
              <button className="btn delete" onClick={()=>handleDelete(m.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button disabled={page===1} onClick={()=>setPage(p=>Math.max(1,p-1))}>Prev</button>
        <span>Page {page} of {totalPages}</span>
        <button disabled={page===totalPages} onClick={()=>setPage(p=>Math.min(totalPages,p+1))}>Next</button>
      </div>
    </div>
    </HistoryProvider>
    </AppProvider>
  );
}

