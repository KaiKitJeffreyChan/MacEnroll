import React from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Enroll",
    path: "/enroll",
    icon: <AiIcons.AiOutlineForm />,
    cName: "nav-text",
  },
  {
    title: "Reviews",
    path: "/contact",
    icon: <FaIcons.FaPenFancy />,
    cName: "nav-text",
  },
];
