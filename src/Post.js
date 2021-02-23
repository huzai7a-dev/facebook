import { Avatar } from '@material-ui/core';
import React from 'react'
import './post.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
function Post({profilePic,userName,image,time,caption}) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic}/>
                    <div className="post__topInfo">
                        <h3>{userName}</h3> 
                        
                    </div>
            </div>
            <div className="post__bottom">
                <p>{caption}</p>
            </div>

            <div className="post__image">
                <img src={image} alt="post"/>
            </div>

            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon/>
                    <p>Like</p>
                </div>

                <div className="post__option">
                    <ChatBubbleOutlineIcon/>
                    <p>Comment</p>
                </div>

                <div className="post__option">
                    <NearMeIcon/>
                    <p>Share</p>
                </div>

                <div className="post__option">
                    <AccountCircleIcon/>
                    <ExpandMoreIcon/>
                </div>
            </div>
        </div>
    )
}

export default Post
