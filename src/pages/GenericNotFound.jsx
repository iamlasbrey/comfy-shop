import React from 'react'
import { Link } from 'react-router-dom'
import './genericnotfound.css'

const GenericNotFound = () => {
  return (
    <div className='genericnotfound'>
      <h1>Page Not Found</h1>

      <Link to='/'>
        <button className='go-back-home'> GO BACK HOME </button> 
      </Link>
    </div>
  )
}

export default GenericNotFound