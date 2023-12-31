import React, { useEffect } from "react";
import "./OnlinePeople.scss";
import OnlineUsers from "./OnlineUsers";
import { useNavigate } from "react-router-dom";

export default function OnlinePeople({ userStatuses, usersDatas }) {
  const onlineUsers = userStatuses.filter(
    (online) => online !== "invisible"
  ).length;
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/')
  }, [])
  return (
    <div className="online-people">
      <div>
        <div className="online-input">
          <input placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </div>
        <div className="online-seperator">
          <span className="onlineNumber">ONLINE - {onlineUsers}</span>
          {usersDatas.map((elem, index) => {
            return (
              <OnlineUsers
                key={elem.id.name}
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
