import React from 'react'
import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function post() {
  return (
    <div className='post'>
        <div className='postWrapper'>
            <div className='postTop'>
                <div className='postTopLeft'>
                    <img className='postProfileImg' src="/assets/person/2.jpeg" alt="" />
                    <span className='postUsername'>Uername</span>
                    <span className='postDate'>5 min ago</span>
                </div>
                <div className='postTopRight'>
                    <MoreVertIcon />
                </div>
            </div>
            <div className='postCenter'></div>
            <div className='postBottom'></div>
        </div>
    </div>
  )
}
