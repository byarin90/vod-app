import React from 'react'
import { Link } from 'react-router-dom'

export default function Page404() {
  return (
    <div className='container'>
      <h2>Page not found, 404!</h2>
      <Link to="/">Back to home page</Link>
    </div>
  )
}
