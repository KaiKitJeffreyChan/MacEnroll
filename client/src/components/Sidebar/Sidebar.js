import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Sidebar.css";
import { IconContext } from "react-icons";

const Sidebar = ({ toggleShift, shift }) => {
  const showSidebar = () => {
    toggleShift();
  };
  // maybe find a way to put the sidebar (3 lines) into home component so theres not a bar
  return (
    <>
      <IconContext.Provider value={{ color: "#7a003d" }}>
        <div className={shift ? "blur" : null}>
          <div className="sidebar">
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div>
        </div>
      </IconContext.Provider>
      <IconContext.Provider value={{ color: "white" }}>
        <nav className={shift ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, idx) => {
              return (
                <li key={idx} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
