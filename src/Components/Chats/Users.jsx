import React from 'react'
import './Users.css'
export default function Users() {
  return (
    <div className='users'>
        <div className='users-profile'>
            <img className='users-profile-picture' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" width={32} alt='pfp' />
            <div className='status'></div>
        </div>
        <div className='users-name'>
            <p>Name</p>
            <p>x</p>
        </div>
    </div>
  )
}
