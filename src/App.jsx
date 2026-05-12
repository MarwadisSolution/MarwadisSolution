import React from "react";
import Scene3D from "./components/Scene3D";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <div className="hero">
        <div className="left">
          <h1>Marwadis Solution</h1>

          <p>
            Building Apps, Websites, AI & Cloud Solutions for businesses.
          </p>

          <button>Get Started</button>
        </div>

        <div className="right">
          <Scene3D />
        </div>
      </div>
    </div>
  );
}
