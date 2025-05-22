import React from "react";
import { Outlet, Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to your dashboard!</p>
      <nav>
        <Link to="profile/johndoe">Go to Profile (example)</Link>
        <Link to="explore/reds">Go to Explore (example)</Link>
      </nav>
      <hr />
      <Outlet /> {/* Nested routes will render here */}
    </div>
  );
}

export default Dashboard;