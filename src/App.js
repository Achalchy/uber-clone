import React from "react";
import "./App.css";
import Header from "./Header";
import Map from "./Map";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <Map />
    </div>
  );
}

export default App;
