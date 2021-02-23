import { Avatar } from '@material-ui/core'
import React from 'react'
import './sidebarow.css'
function Sidebarow({title, Icon,src}) {
    return (
        <div className="sidebarow">
            {
                Icon ? <Icon/> : <Avatar src={src}/>
            }
            <h4>{title}</h4>
        </div>
    )
}

export default Sidebarow;
