import React from "react";
import "./OnlinePeople.scss";
import Users from "../Chats/Users";

export default function OnlinePeople() {
  return (
    <div className="online-people">
      <div>
        <div className="online-input">
          <input placeholder="Search" />
          SearchIcon
        </div>
        <div>
          <span>Online - 5</span>
          <div>
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1024px-Default_pfp.svg.png"
                height={28}
                alt=""
              />
              <h3>Name</h3>
              <p>Status</p>
            </div>
            <div>
                <p>Icon1</p>
                <p>Icon2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
