import React from 'react'
import Videoitem from './VIdeoitem'


function Videolist({videos,onVideoSelect}) {
    //props.videos
    const renderedList= videos.map(video=>{//getting all videos like for loop
        return <Videoitem 
                    key={video.id.videoId}
                    onVideoSelect={onVideoSelect} //this is getting an onClick event
                    video={video}/>//this is a single video passed to videoitem
    })
    return (
        //returnin all videos
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    )
}

export default Videolist