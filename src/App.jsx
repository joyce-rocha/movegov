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
          {info.map((item) => (
            <DashboardCard key={item.id} info={item} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
