import React from 'react'
import "./rightbar.css"
import Online from "./../online/online"
import {Users} from "./../../data"

export default function rightbar() {
  return (
    <div className="rightbar">
      <div className='rightbarWrapper'>
        <div className='birthdayContainer'>
          <img className='birthdayImg' src='/assets/gift.png' alt='' />
          <span className="birthdayText">
            <b>Pola</b> and <b>3 others</b> have birthday today.
          </span>
        </div>
        <img className='rightbarAd' src='/assets/ad.png' alt='' />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className='rightbarFriendList'>
          {Users.map(u=>(
            <Online key={u.id} user={u}/>
          ))}
        </ul>
      </div>
    </div>
  )
}
