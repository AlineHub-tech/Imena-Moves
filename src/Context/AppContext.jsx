import { createContext, useContext, useEffect, useState } from "react";
const loadLS = (key, fallback) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
  } catch {
    return fallback;
  }
};

const saveLS = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
const AppContext = createContext();
export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  // Members
  const [members, setMembers] = useState(() => loadLS("members", []));

  // Attendance
  const [attendance, setAttendance] = useState(() =>
    loadLS("attendance", [])
  );

  // History (GLOBAL SYSTEM LOGS)
  const [history, setHistory] = useState(() =>
    loadLS("history", [])
  );

  // Collaboration messages
  const [collaboration, setCollaboration] = useState(() =>
    loadLS("collaboration", [])
  );

  // Entertainment items
  const [entertainment, setEntertainment] = useState(() =>
    loadLS("entertainment", [])
  );

  // -----------------------
  // Auto-save to localStorage
  // -----------------------
  useEffect(() => saveLS("members", members), [members]);
  useEffect(() => saveLS("attendance", attendance), [attendance]);
  useEffect(() => saveLS("history", history), [history]);
  useEffect(() => saveLS("collaboration", collaboration), [collaboration]);
  useEffect(() => saveLS("entertainment", entertainment), [entertainment]);

  // -----------------------
  // History Recorder
  // -----------------------
  const addHistory = (action) => {
    const log = {
      id: crypto.randomUUID(),
      action,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };

    setHistory((prev) => [log, ...prev]);
  };

  // -----------------------
  // MEMBERS CRUD
  // -----------------------
  const addMember = (m) => {
    setMembers((prev) => [...prev, m]);
    addHistory(`Added new member: ${m.fullName}`);
  };

  const deleteMember = (id) => {
    const member = members.find((m) => m.id === id);
    setMembers((prev) => prev.filter((m) => m.id !== id));
    addHistory(`Deleted member: ${member?.fullName || id}`);
  };

  const updateMember = (id, updated) => {
    setMembers((prev) =>
      prev.map((m) => (m.id === id ? { ...m, ...updated } : m))
    );
    addHistory('Updated member info');
  };

  // -----------------------
  // ATTENDANCE
  // -----------------------
  const markAttendance = (memberId, status) => {
    const record = {
      id: crypto.randomUUID(),
      memberId,
      status,
      date: new Date().toISOString().slice(0, 10),
      time: new Date().toLocaleTimeString(),
    };

    setAttendance((prev) => [...prev, record]);

    addHistory(`Marked attendance for member (${status})`);
  };

  // -----------------------
  // COLLABORATION
  // -----------------------
  const addMessage = (msg) => {
    const item = {
      id: crypto.randomUUID(),
      message: msg,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };

    setCollaboration((prev) => [...prev, item]);
    addHistory('New collaboration message added');
  };

  // -----------------------
  // ENTERTAINMENT
  // -----------------------
  const addEntertainment = (title, link) => {
    const item = {
      id: crypto.randomUUID(),
      title,
      link,
      createdAt: new Date().toLocaleString(),
    };

    setEntertainment((prev) => [...prev, item]);
    addHistory(`Added entertainment: ${title}`);
  };

  // -----------------------
  // EXPORT
  // -----------------------
  return (
    <AppContext.Provider
      value={{
        members,
        addMember,
        deleteMember,
        updateMember,

        attendance,
        markAttendance,

        history,

        collaboration,
        addMessage,

        entertainment,
        addEntertainment,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};