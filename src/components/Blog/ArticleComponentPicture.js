import React from 'react';

const ArticleComponentPicture = ({ image_url, alt }) => {
    return(
        <div>
            <img className="img-fluid fullImageBox" src={image_url} alt={alt}></img>
        </div>
    );
}

export default  ArticleComponentPicture;