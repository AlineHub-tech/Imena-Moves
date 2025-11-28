import React, { useState, useEffect } from "react";
import "../styles/Member.css";
import Sidebar from '../components/Sidebar';
import { AppProvider } from '../Context/AppContext';
const LS_MEMBERS = "members";

function uid(pref="m"){ return pref + Math.random().toString(36).slice(2,9); }

function todayIsoDate(){ return new Date().toISOString().slice(0,10); }

export default function Members() {
  const [members, setMembers] = useState([]);
  const [search,setSearch] = useState("");
  const [editId,setEditId] = useState(null);

  const [fullName,setFullName] = useState("");
  const [gender,setGender] = useState("Male");
  const [age,setAge] = useState(20);
  const [phone,setPhone] = useState("");
  const [email,setEmail] = useState("");
  const [talent,setTalent] = useState("");
  const [level,setLevel] = useState("Beginner");
  const [role,setRole] = useState("Member");
  const [joinDate,setJoinDate] = useState(todayIsoDate());
  const [address,setAddress] = useState("");
  const [profileUrl,setProfileUrl] = useState("");

  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem(LS_MEMBERS)||"[]");
    setMembers(data);
  },[]);

  useEffect(()=>{
    localStorage.setItem(LS_MEMBERS, JSON.stringify(members));
  }, [members]);

  function pushHistory(msg){
    console.log(msg); 
  }

  function handleSubmit(e){
    e.preventDefault();
    if(editId){
      setMembers(prev=>prev.map(m=>m.id===editId ? 
        {id:editId, fullName, gender, age, phone, email, talent, level, role, joinDate, address, profileUrl}:m
      ));
      pushHistory(`Updated member: ${fullName}`);
      setEditId(null);
    }else{
      const m = {id:uid("m"), fullName, gender, age, phone, email, talent, level, role, joinDate, address, profileUrl};
      setMembers(prev=>[m, ...prev]);
      pushHistory(`Added member: ${fullName}`);
    }
    // reset fields
    setFullName(""); setGender("Male"); setAge(20); setPhone("");
    setEmail(""); setTalent(""); setLevel("Beginner"); setRole("Member");
    setJoinDate(todayIsoDate()); setAddress(""); setProfileUrl("");
  }

  function handleEdit(m){
    setEditId(m.id);
    setFullName(m.fullName);
    setGender(m.gender);
    setAge(m.age);
    setPhone(m.phone);
    setEmail(m.email);
    setTalent(m.talent);
    setLevel(m.level);
    setRole(m.role);
    setJoinDate(m.joinDate);
    setAddress(m.address);
    setProfileUrl(m.profileUrl);
  }

  function handleDelete(id){
    setMembers(prev=>prev.filter(m=>m.id!==id));
    pushHistory(`Deleted member with ID: ${id}`);
  }

  // Filter
  const filtered = members.filter(m=>m.fullName.toLowerCase().includes(search.toLowerCase()) || m.talent.toLowerCase().includes(search.toLowerCase()));

  return (
    <AppProvider>
    <div className="members-root">
      <Sidebar/>
      <h1>Members</h1>
<div className="member-search">
        <input placeholder="Search member..." value={search} onChange={e=>setSearch(e.target.value)} />
      </div>
      <form className="member-form" onSubmit={handleSubmit}>
        <input placeholder="Full Name" value={fullName} onChange={e=>setFullName(e.target.value)} required />
        <select value={gender} onChange={e=>setGender(e.target.value)}>
          <option>Male</option>
          <option>Female</option>
        </select>
        <input type="number" placeholder="Age" value={age} onChange={e=>setAge(e.target.value)} required />
        <input placeholder="Phone" value={phone} onChange={e=>setPhone(e.target.value)} />
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input placeholder="Talent / Skill" value={talent} onChange={e=>setTalent(e.target.value)} />
        <select value={level} onChange={e=>setLevel(e.target.value)}>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>
        <select value={role} onChange={e=>setRole(e.target.value)}>
          <option>Member</option>
          <option>Admin</option>
        </select>
        <input type="date" value={joinDate} onChange={e=>setJoinDate(e.target.value)} />
        <input placeholder="Address" value={address} onChange={e=>setAddress(e.target.value)} />
        <input placeholder="Profile URL" value={profileUrl} onChange={e=>setProfileUrl(e.target.value)} />

        <button type="submit">{editId ? "Update Member" : "Add Member"}</button>
      </form>
      <div className="member-list">
        {filtered.map(m=>(
          <div key={m.id} className="member-card">
            <div className="member-left">
              <div className="member-name">{m.fullName}</div>
              <div className="member-talent">{m.talent}</div>
              <div className="member-phone">{m.phone}</div>
            </div>
            <div className="member-right">
              <button className="btn edit" onClick={()=>handleEdit(m)}>Edit</button>
              <button className="btn delete" onClick={()=>handleDelete(m.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </AppProvider>
  );
}