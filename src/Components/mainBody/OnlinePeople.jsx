import React from "react";
import "./OnlinePeople.scss";
import Users from "../Chats/Users";
import OnlineUsers from "./OnlineUsers";

export default function OnlinePeople({userStatuses, usersDatas}) {
  return (
    <div className="online-people">
      <div>
        <div className="online-input">
          <input placeholder="Search" />
          SearchIcon
        </div>
        <div>
          <span>Online - 5</span>
          {usersDatas.map((elem, index) => {
              return (
                <OnlineUsers
                  key={elem.login.uuid}
                  pfp={elem.picture.large}
                  name={elem.name.first}
                  status={userStatuses[index]}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
