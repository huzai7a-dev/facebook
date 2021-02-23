import React from 'react'
import StoryRow from './StoryRow'
import './storyRow.css'

function Story(props) {
    return (
        <div className="story">

            <StoryRow 
            title={props.data.displayName}
            storyImg = "https://cdn-images-1.medium.com/max/280/1*lKN9xV1YEin-2wfAiGySBA.png"
            profileSrc={props.data.photoURL}
            />

            <StoryRow 
            title={props.data.displayName}
            storyImg = "https://cdn-images-1.medium.com/max/280/1*lKN9xV1YEin-2wfAiGySBA.png"
            profileSrc={props.data.photoURL}
            />

            <StoryRow 
            title={props.data.displayName}
            storyImg = "https://cdn-images-1.medium.com/max/280/1*lKN9xV1YEin-2wfAiGySBA.png"
            profileSrc={props.data.photoURL}
            />

            <StoryRow 
            title={props.data.displayName}
            storyImg = "https://cdn-images-1.medium.com/max/280/1*lKN9xV1YEin-2wfAiGySBA.png"
            profileSrc={props.data.photoURL}
            />

            <StoryRow 
            title={props.data.displayName}
            storyImg = "https://cdn-images-1.medium.com/max/280/1*lKN9xV1YEin-2wfAiGySBA.png"
            profileSrc={props.data.photoURL}
            />
        </div>
    )
}

export default Story
