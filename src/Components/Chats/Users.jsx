import React from 'react'
import './Users.css'
export default function Users({name}) {
  return (
    <div className='users'>
        <div className='users-profile'>
            <img className='users-profile-picture' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" width={32} alt='pfp' />
            <div className='profile-status green'></div>
        </div>
        <div className='users-name'>
            <p>{name}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
            </svg>
        </div>
    </div>
  )
}
