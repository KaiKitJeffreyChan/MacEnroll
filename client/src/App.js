import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
        <Switch>
          <Route path="/" exact component={() => <Home shift={shift} />} />
          <Route path="/enroll" component={() => <Enroll shift={shift} />} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
