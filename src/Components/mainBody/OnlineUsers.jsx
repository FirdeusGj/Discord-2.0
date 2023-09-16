import React from 'react'
import './OnlineUsers.scss'

export default function OnlineUsers({name, pfp, status}) {
  return (
    <div style={{display:'flex'}}>
        <div>
            <img src={pfp} width={32}/>
        </div>
        <div>
            <p>{name}, {status}</p>
        </div>
    </div>
  )
}
