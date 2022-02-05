import React from "react";
import "./App.css";
import useWindowSize from "./hooks/useWindowSize";

export default function App() {
  const page = useWindowSize();

  return (
    <div className="app" style={{ ...page }}>
      App
    </div>
  );
}
