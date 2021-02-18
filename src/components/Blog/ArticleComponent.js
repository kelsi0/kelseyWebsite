import React, {Component} from 'react';
import ArticleComponentPicture from './ArticleComponentPicture';
import ArticleComponentVideo from './ArticleComponentVideo';
import ArticleComponentText from './ArticleComponentText';
import ArticleComponentCodeSnippet from './ArticleComponentCodeSnippet';

class ArticleComponent extends Component {
    render(){

        switch(this.props.element_type)
        { 
            case "picture":
                return(
                    <ArticleComponentPicture 
                    image_url={this.props.image_url} 
                    alt={this.props.alt_text}/>
                    )

            case "paragraph":
                return(
                    <ArticleComponentText 
                    text={this.props.text} />
                    )
                break;

            case "video":
                return(
                    <ArticleComponentVideo 
                    video_url={this.props.video_url} />
                    )
                break;

            case "code_snippet":
                return(
                    <ArticleComponentCodeSnippet
                    trinket_url={this.props.trinket_url} 
                    code_title={this.props.code_title} />
                )
                break;

            default: break;
        }

    }
}
export default  ArticleComponent;