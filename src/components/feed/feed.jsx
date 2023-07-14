import React from 'react'
import "./feed.css"
import Share from "./../share/share"

export default function feed() {
  return (
    <div className='feed'>
      <div className='feedWrapper'>
        <Share />
      </div>
    </div>
  )
}
