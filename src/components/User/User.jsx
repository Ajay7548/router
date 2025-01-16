import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid}= useParams()
  return (
    <div
    className='p-4 bg-slate-600 text-white text-3xl rounded-md'
    >User:{userid.toUpperCase()}</div>
  )
}

export default User
