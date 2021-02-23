import { Avatar } from '@material-ui/core'
import React from 'react'
import './storyRow.css'
function StoryRow({storyImg, profileSrc, title}) {
    return (
        <div className="storyRow" style={{backgroundImage:`url(${storyImg})`}}>

            <Avatar  src={profileSrc}/>
            <h4>{title}</h4>

        </div>
    )
}

export default StoryRow
