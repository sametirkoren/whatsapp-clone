import React from "react";
import "./App.css";
import useWindowSize from "./hooks/useWindowSize";
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import useAuthUser from "./hooks/useAuthUser";

export default function App() {
  const page = useWindowSize();
  const user = useAuthUser();
  
  if(!user){
    return <Login/>
  }

  return (
    <div className="app" style={{ ...page }}>
      <div className="app__body">
        <Sidebar user={user} page={page} />
      </div>
    </div>
  );
}
