import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const sidebar = () => {
  return (
    <div className="sidebar">
      <div className="brand"> <h1>Mahi</h1> </div>

      <div className="navbar-toggler">
        <span> </span>
      </div>
      
      <ul className="nav">
        <li> <a href="#" className="active"> <FontAwesomeIcon icon={["fas", "home"]} /> Home </a> </li>
        <li> <a href="#"> <FontAwesomeIcon icon={["fas", "user"]} /> About </a> </li>
        <li> <a href="#"> <FontAwesomeIcon icon={["fas", "list"]} /> Service </a> </li>
        <li> <a href="#"> <FontAwesomeIcon icon={["fas", "briefcase"]} /> Portfolio </a> </li>
        <li> <a href="#"> <FontAwesomeIcon icon={["fas", "envelope"]} /> Blog </a> </li>
        <li> <a href="#"> <FontAwesomeIcon icon={["fas", "comment"]} /> Contact </a> </li>
      </ul>
    </div>
  );
};
export default sidebar;

