import React from 'react'
import './OnlineUsers.scss'

export default function OnlineUsers({name, pfp, status}) {
  return (
    <>
    <div className='onlineUsers'>
      <div className='onlineUser'>
        <div className='onlineUser__pfp'>
            <img src={pfp} width={32}/>
        </div>
        <div className='onlineUser__name'>
            <p>{name}</p>
        </div>
      </div>
      <div className='onlineUser__buttons'>
        <button className='onlineUser__chat'><span>Message</span><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"/></svg></button>
        <button className='onlineUser__option'><span>More</span><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 128 512"><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg></button>
      </div>
    </div>
    </>
  )
}
