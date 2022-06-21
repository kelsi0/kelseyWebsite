import React from 'react';

const ArticleComponentVideo = ({ title, video_url }) => {
    return(
        <div>
            <iframe title={title} className="videoCardBox" width="560" height="315" src={video_url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
}

export default ArticleComponentVideo;
 