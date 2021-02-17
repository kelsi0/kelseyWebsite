import React, {Component} from 'react';

class ArticleComponentVideo extends Component {
    render(){
        return(
            <div className="cardBox">
                <div className="col-md-12">
                <iframe className="img-fluid smallImageBo" src="https://www.youtube.com/embed/JbLuXg4CN5g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        )
    }
}
export default ArticleComponentVideo;
