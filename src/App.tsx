import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Profile from "./Profile";
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Explore from "./Explore";
import HighOrderComp from "./HighOrderComp";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/HighOrderComp" element={<HighOrderComp />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile/:username" element={<Profile />} />
          <Route path="explore/:feed" element={<Explore />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
