import React, { useEffect, useState } from 'react'
import Story from './Story'
import './feed.css'
import MessegeSender from './MessegeSender'
import Post from './Post'
import db from './firebase';
function Feed(props) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection("post").orderBy("time", "desc").onSnapshot(snapshot=>{
        setPosts(snapshot.docs);
        snapshot.docs.forEach(doc=>{
            console.log(doc.data().time);
        })
    })
    }, []);
    return (
        <div className="feed">
            <Story data={props.data}/>
            <MessegeSender data={props.data}/>
            {
             posts.map((post)=>(
                 <Post 
                     key={post.id}
                     profilePic={post.data().profilePic}
                     userName = {post.data().userName}
                     time = {post.data().time}
                     caption ={post.data().caption}
                     image = {post.data().image}
                 /> 
             ))}
        </div>
    )
}

export default Feed
