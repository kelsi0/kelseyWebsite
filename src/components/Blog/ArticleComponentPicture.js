import React, {Component} from 'react';

class ArticleComponentPicture extends Component {
    render(){
        return(
            <div>
                <img className="img-fluid smallImageBox" src={this.props.image_url} alt={this.props.alt}></img>
            </div>
        )
    }
}
export default  ArticleComponentPicture;