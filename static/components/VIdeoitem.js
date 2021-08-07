import React from 'react'
import './VIdeoitem.css'

function Videoitem({ video ,onVideoSelect}) {
    return (
        <div  onClick={()=>onVideoSelect(video)} className="video-item item"> {/*this is the selected item to home as onselectedvideo*/}
            <img alt={video.snippet.title}  className="ui image" src={video.snippet.thumbnails.medium.url}/>  {/* getting image of the particular video */}
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    )
}

export default Videoitem