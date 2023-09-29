import React from "react";
import { useParams } from "react-router-dom";
import "./UserChat.scss";
export default function UserChat({ usersData }) {
  const { id } = useParams();
  const user = usersData.find((user) => user.name.first === id);
  return (
    <div className="userChat__chat-wrapper">
      {user ? (
        <>
          <div className="userChat__chat">
            <div className="userChat__features">
              <div className="userChat__top">
                <img src={user.picture.large} alt="" height={24} />
                <p>{user.name.first}</p>
              </div>
            </div>
            <div>
              <p>This is {user.name.first}</p>
              <img src={user.picture.large} height={80} alt={user.name.first} />
            </div>
          </div>
        </>
      ) : (
        <p>Refresh</p>
      )}
    </div>
  );
}
