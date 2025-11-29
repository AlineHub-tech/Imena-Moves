import React, { useEffect, useState } from "react";
import "../styles/Collaboration.css";
import { AppProvider } from '../Context/AppContext';
import { HistoryProvider } from "../Context/HistoryContext";
import Sidebar from '../components/Sidebar';
const LS_ABA = "collaboration";

function uid(pref="a"){ return pref + Math.random().toString(36).slice(2,9); }

export default function Collaboration() {
  const [aba,setAba] = useState([]);
  const [name,setName] = useState("");
  const [role,setRole] = useState("");
  const [contact,setContact] = useState("");
  const [editId,setEditId] = useState(null);
  const [search,setSearch] = useState("");
  const [page,setPage] = useState(1);
  const perPage = 5;

  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem(LS_ABA)||"[]");
    setAba(data);
  },[]);

  useEffect(()=>{ localStorage.setItem(LS_ABA, JSON.stringify(aba)); }, [aba]);

  function handleSubmit(e){
    e.preventDefault();
    if(editId){
      setAba(prev=>prev.map(a=>a.id===editId ? {id:editId,name,role,contact}:a));
      setEditId(null);
    }else{
      setAba(prev=>[{id:uid(), name, role, contact}, ...prev]);
    }
    setName(""); setRole(""); setContact("");
  }

  function handleEdit(a){
    setEditId(a.id); setName(a.name); setRole(a.role); setContact(a.contact);
  }

  function handleDelete(id){
    setAba(prev=>prev.filter(a=>a.id!==id));
  }

  // Filter & Pagination
  const filtered = aba.filter(a=>a.name.toLowerCase().includes(search.toLowerCase()) || a.role.toLowerCase().includes(search.toLowerCase()));
  const totalPages = Math.max(1, Math.ceil(filtered.length/perPage));
  const pageItems = filtered.slice((page-1)*perPage,page*perPage);

  return (
    <AppProvider>
      <HistoryProvider>
    <div className="collab-root">
      <Sidebar/>
      <h1>Collaboration / ABA</h1>
      <div className="stats-card total">Total ABA: {aba.length}</div>

      <form className="aba-form" onSubmit={handleSubmit}>
        <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} required />
        <input placeholder="Role" value={role} onChange={e=>setRole(e.target.value)} required />
        <input placeholder="Contact" value={contact} onChange={e=>setContact(e.target.value)} required />
        <button type="submit">{editId ? "Update" : "Add"} ABA</button>
      </form>

      <div className="aba-search">
        <input placeholder="Search ABA..." value={search} onChange={e=>{setSearch(e.target.value); setPage(1);}}/>
      </div>

      <div className="aba-list">
        {pageItems.map(a=>(
          <div key={a.id} className="aba-card">
            <div className="aba-info">
              <div className="aba-name">{a.name}</div>
              <div className="aba-role">{a.role}</div>
              <div className="aba-contact">{a.contact}</div>
            </div>
            <div className="aba-actions">
              <button className="btn edit" onClick={()=>handleEdit(a)}>Edit</button>
              <button className="btn delete" onClick={()=>handleDelete(a.id)}>Delete</button>
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

