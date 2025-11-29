import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Members from './pages/Members';
import Attendance from './pages/Attendance';
import History from './pages/History';
import Settings from './pages/Settings';
import About from "./pages/About";
import Services from "./pages/Services";
import LearnMore from "./pages/LearnMore";
import Contact from "./pages/Contact";
import Collaboration from './pages/Collaboration';
import Info from './pages/Info';
import UserDashboard from './pages/UserDashboard';
import Landing from "./pages/Landing";
import { AuthProvider } from "./Context/AuthContext";
import { HistoryProvider } from "./Context/HistoryContext";
// import Entertainment from "./page/Entertainment";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Logout from './pages/Logout';
import { AppProvider } from './Context/AppContext';

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <HistoryProvider>
          <AuthProvider>
                 <Routes>
                <Route path = "/" element = {<Landing />} />
                {/* <Route path="/landing" element={<Landing />} /> */}
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/userdashboard" element={<UserDashboard />} />
                <Route path="/members" element={<Members />} />
                <Route path="/attendance" element={<Attendance />} />
                {/* <Route path="/entertainment" element={<Entertainment />} /> */}
                <Route path="/history" element={<History />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/collaboration" element={<Collaboration />} />
                <Route path="/info" element={<Info />} />
                 <Route path="/about" element={<About/>} />
                <Route path="/services" element={<Services/>} />
                <Route path="/learn" element={<LearnMore/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/login" element={<Login />} />
                 <Route path="/signup" element={<Signup />} />
                <Route path="/logout" element={<Logout />} />
              </Routes>
               </AuthProvider>
               </HistoryProvider>
      </AppProvider>
    </BrowserRouter>
  );
}
