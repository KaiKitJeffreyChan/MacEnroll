import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Enroll from "./pages/Enroll/Enroll";
import Contact from "./pages/Contact/Contact";

const App = () => {
  const [shift, setShift] = useState(false);
  const toggleShift = () => setShift(!shift);

  return (
    <>
      <Router>
        <Sidebar toggleShift={toggleShift} shift={shift} />
        <Routes>
          <Route path="/" exact element={<Home shift={shift} />} />
          <Route path="/enroll" element={<Enroll shift={shift} />} />
          <Route path="/contact" element={Contact} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
