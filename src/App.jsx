import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";


function App() {
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')));
  return (
    <div className={`${isDark? "dark" : ""} `}>
      <Navbar theme={[isDark, setIsDark]} />
      <Outlet/>
    </div>
  );
}

export default App;
