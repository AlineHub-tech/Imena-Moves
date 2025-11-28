import React, { useEffect, useState } from "react";
import "../styles/Settings.css";
import Sidebar from '../components/Sidebar';
import { AppProvider } from '../Context/AppContext';
const LS_ANN = "announcements";

function uid(pref="a"){ return pref + Math.random().toString(36).slice(2,9); }

export default function Settings() {
  const [ann, setAnn] = useState([]);
  const [title, setTitle] = useState("");
  const [content,setContent] = useState("");
  const [editId,setEditId] = useState(null);
  const [search,setSearch] = useState("");
  const [page,setPage] = useState(1);
  const perPage = 5;

  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem(LS_ANN)||"[]");
    setAnn(data);
  },[]);

  useEffect(()=>{ localStorage.setItem(LS_ANN, JSON.stringify(ann)); }, [ann]);

  const total = ann.length;

  function handleSubmit(e){
    e.preventDefault();
    if(editId){
      setAnn(prev=>prev.map(a=>a.id===editId ? {...a,title,content}:a));
      setEditId(null);
    }else{
      setAnn(prev=>[{id:uid(), title, content}, ...prev]);
    }
    setTitle(""); setContent("");
  }

  function handleEdit(a){
    setEditId(a.id); setTitle(a.title); setContent(a.content);
  }

  function handleDelete(id){
    setAnn(prev=>prev.filter(a=>a.id!==id));
  }

  // Filter & Pagination
  const filtered = ann.filter(a=>a.title.toLowerCase().includes(search.toLowerCase()) || a.content.toLowerCase().includes(search.toLowerCase()));
  const totalPages = Math.max(1, Math.ceil(filtered.length/perPage));
  const pageItems = filtered.slice((page-1)*perPage, page*perPage);

  return (
    <AppProvider>
    <div className="settings-root">
      <Sidebar/>
      <h1>Settings / Announcements</h1>
      <div className="stats-card total">Total Announcements: {total}</div>

      <form className="ann-form" onSubmit={handleSubmit}>
        <input placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} required />
        <textarea placeholder="Content" value={content} onChange={e=>setContent(e.target.value)} required/>
        <button type="submit">{editId ? "Update" : "Add"} Announcement</button>
      </form>

      <div className="ann-search">
        <input placeholder="Search..." value={search} onChange={e=>{setSearch(e.target.value); setPage(1);}}/>
      </div>

      <div className="ann-list">
        {pageItems.map(a=>(
          <div key={a.id} className="ann-card">
            <div className="ann-left">
              <div className="ann-title">{a.title}</div>
              <div className="ann-content">{a.content}</div>
            </div>
            <div className="ann-right">
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
    </AppProvider>
  );
}

