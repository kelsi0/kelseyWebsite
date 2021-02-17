import React, {Component} from 'react';

class ArticleComponentVideo extends Component {
    render(){
        return(
            <div>
                <iframe className="img-fluid smallImageBo" src={this.props.post_elements.video_url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        )
    }
}
export default ArticleComponentVideo;
