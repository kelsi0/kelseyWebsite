import React from 'react';
import ArticleComponentPicture from './ArticleComponentPicture';
import ArticleComponentVideo from './ArticleComponentVideo';
import ArticleComponentText from './ArticleComponentText';
import ArticleComponentCodeSnippet from './ArticleComponentCodeSnippet';

const ArticleComponent = ({ element_type, image_url, alt_text, text, video_url, trinket_url, code_title }) => {
    switch(element_type)
    { 
        case "picture":
            return(
                <ArticleComponentPicture 
                image_url={image_url} 
                alt={alt_text}/>
                )

        case "paragraph":
            return(
                <ArticleComponentText 
                text={text} />
                )
            break;

        case "video":
            return(
                <ArticleComponentVideo 
                video_url={video_url} />
                )
            break;

        case "code_snippet":
            return(
                <ArticleComponentCodeSnippet
                trinket_url={trinket_url} 
                code_title={code_title} />
            )
            break;

        default: break;
    }
}

export default  ArticleComponent;