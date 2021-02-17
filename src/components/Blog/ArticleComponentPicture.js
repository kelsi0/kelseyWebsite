import React, {Component} from 'react';

class ArticleComponentPicture extends Component {
    render(){
        return(
            <div>
                <img className="img-fluid smallImageBox" src={this.props.post_elements.image_url} alt=""></img>
            </div>
        )
    }
}
export default  ArticleComponentPicture;