import React from 'react';
import YouTube from 'react-youtube';

const YouTubeVideo = ({ videoId }) => {
    const onReady = (event) => {
        
    };

    const opts = {
        height: '390',
        width: '640',
    };

    return (
        <YouTube
            videoId={videoId}
            opts={opts}
            onReady={onReady}
        />
    );
};

export default YouTubeVideo;