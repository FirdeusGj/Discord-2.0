import React from "react";
import { useParams } from "react-router-dom";

export default function UserChat() {
  const { id } = useParams();
  return <div>UserChat of {id}</div>;
}
