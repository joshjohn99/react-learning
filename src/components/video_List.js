import React from 'react';
import  VideoListItem from "./video_List_Item";

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return <VideoListItem
                    key={video.etag}
                    onVideoSelect={props.onVideoSelect}
                    video={video}/>
        });
    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
}

export default VideoList;