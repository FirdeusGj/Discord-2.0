import React from "react";
import "./Users.scss";
import { NavLink } from "react-router-dom";
export default function Users({ name, pfp, status }) {
  return (
    <NavLink to={`/${name}`} className="users">
      <div className="users-profile">
        <img className="users-profile-picture" src={pfp} width={32} alt="pfp" />
        <div className={`profile-status ${status}`}></div>
      </div>
      <div className="users-name">
        <p>{name}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
        >
          <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
        </svg>
      </div>
    </NavLink>
  );
}