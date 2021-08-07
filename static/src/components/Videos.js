import React, { Component, useState,useEffect} from 'react';
import Vsearch from './Vsearch'
import youtube from '../api/youtube';
import Videolist from './Videolist';
import Videodetail from './Videodetail';
import './VIdeoitem.css'

class Videos extends Component {

    state ={videos: [] ,selectedVideo: null};//getting lot of videos as array type []

    componentDidMount(){
        this.onTermsubmit('Vijay deverkonda');
    }

    onTermsubmit =async term =>{
        const response = youtube.get('/search',{
            params:{
                q: term //this is the searching term as q
                
            }
        })
        this.setState({
                videos: (await response).data.items,
                selectedVideo:(await response).data.items[0]
            })//setting the all null array to founded videos
    }

    onVideoSelect = (video)=>{
        this.setState({ selectedVideo: video})//selected video from video list
    }
    render() {
        return (
            <div className="ui-contain">
                <Vsearch onFormSubmit={this.onTermsubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <Videodetail video={this.state.selectedVideo}/> {/*for getting selectedVideo detail*/}
                        </div>
                        <div className="five wide column">
                            <Videolist 
                                onVideoSelect={this.onVideoSelect} //choosed video as selectedVideo this onclick function at videoitem
                                videos={this.state.videos}   //{/* I have {this.state.videos.length} videos. */}
                            />        
                        </div>              
                    </div>
                </div>
                </div>
            
        )
    }
}

export default Videos
