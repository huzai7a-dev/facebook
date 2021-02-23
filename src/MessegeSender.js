import  React, {useState} from 'react'
import Avatar from '@material-ui/core/Avatar';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import './messagesender.css';
import firebase from 'firebase';
import db from './firebase';
function MessegeSender(props) {
    const [input, setInput] = useState("");
    const [image, setImage] = useState("")
    const handleSubmit =(e)=>{
        e.preventDefault();
        db.collection("post").add({
            caption:input,
            time:firebase.firestore.FieldValue.serverTimestamp(),
            profilePic:props.data.photoURL,
            image:image,
            userName:props.data.displayName
        })
        setInput("");
        setImage("");
    }
    console.log(firebase.firestore.FieldValue.serverTimestamp());
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={props.data.photoURL}/>
                
                <form>
                    <input 
                        className="messageSender__input" 
                        placeholder={` What's on your mind ? ${props.data.displayName}`}
                        value={input}
                        onChange={(e)=> setInput(e.target.value)}
                        />

                    <input
                    value={image}
                    onChange={(e)=> setImage(e.target.value)}
                    placeholder="image URL (Optional)"
                    />

                    <button type="submit" onClick={handleSubmit}>Hidden Submit</button>
                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{color:'red'}}/>
                    <h3>Live Video</h3>
                </div>

                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color:'green'}}/>
                    <h3>Photo/Video</h3>
                </div>

                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{color:'orange'}}/>
                    <h3>Feeling/Activity</h3>
                </div>

            </div>
        </div>
    )
}

export default MessegeSender
