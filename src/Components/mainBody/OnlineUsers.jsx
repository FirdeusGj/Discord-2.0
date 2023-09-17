import React from 'react'
import './OnlineUsers.scss'

export default function OnlineUsers({name, pfp, status}) {
  return (
    <div className='onlineUsers'>
      <div className='onlineUser'>
        <div>
            <img src={pfp} width={32}/>
        </div>
        <div>
            <p>{name}</p>
        </div>
      </div>
    </div>
  )
}
