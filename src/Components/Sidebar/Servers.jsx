import React from "react";
import "./Servers.scss";

export default function Servers({ title, tooltip }) {
  return (
    <div className="servers">
      {title}
      <div className="servers-tooltip">
        <p>{tooltip}</p>
      </div>
    </div>
  );
}
