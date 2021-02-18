import React, {Component} from 'react';

class ArticleComponentVideo extends Component {
    render(){
        return(
            <div>
                <iframe className="videoCardBox" width="560" height="315" src={this.props.video_url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        )
    }
}
export default ArticleComponentVideo;
 