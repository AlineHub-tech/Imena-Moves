import React, { createContext, useContext, useState, useEffect } from "react";

const HistoryContext = createContext();

export const useHistory = () => useContext(HistoryContext);

export const HistoryProvider = ({ children }) => {
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const att = JSON.parse(localStorage.getItem("attendance") || "[]");
    const mem = JSON.parse(localStorage.getItem("members") || "[]");
    setAttendanceRecords(att);
    setMembers(mem);
  }, []);

  useEffect(() => {
    localStorage.setItem("attendance", JSON.stringify(attendanceRecords));
  }, [attendanceRecords]);

  const addAttendance = (record) => {
    setAttendanceRecords(prev => [record, ...prev]);
  };

  return (
    <HistoryContext.Provider value={{ attendanceRecords, members, addAttendance }}>
      {children}
    </HistoryContext.Provider>
  );
};
