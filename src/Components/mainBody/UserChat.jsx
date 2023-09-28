import React from "react";
import { useParams } from "react-router-dom";
import './UserChat.scss'

export default function UserChat({ usersData }) {
  const { id } = useParams();

  const user = usersData.find((user) => user.name.first === id);

  return (
    <div>
      {user ? (
        <>
        <div className="userChat__chat">
          <div>This is {user.name.first}</div>
          <img src={user.picture.large} height={32} alt={user.name.first} />
        </div>
        </>
      ) : (
        <p>Refresh</p>
      )}
    </div>
  );
}
