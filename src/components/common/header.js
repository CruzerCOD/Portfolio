import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <Link to="/" className="nav-link active">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/Projects" className="nav-link">
          Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/Contact" className="nav-link active">
          Contact
        </Link>
      </li>
    </ul>
  );
}
