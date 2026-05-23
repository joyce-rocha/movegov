// import { useState } from "react";
import "./App.css";
import DashboardCard from "./components/DashboardCard";
import info from "./info";

function App() {
  return (
    <div className="app-wrapper">
      <header>
        <h1>MoveGov</h1>
        <h2>Fleet Management System</h2>
      </header>
      <main>
        <div className="cards">
          <DashboardCard title="Vehicles" value="12" />
          <DashboardCard title="Drivers" value="8" />
          <DashboardCard title="Missions" value="4" />
          <DashboardCard title="Alerts" value="3" />
        </div>
      </main>
    </div>
  );
}

export default App;
