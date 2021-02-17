import React, {Component} from 'react';

class ArticleComponentPicture extends Component {
    render(){
        return(
            <div className="cardBox">
                <div className="col-md-12">
                    <img className="img-fluid smallImageBox" src={this.props.card_details.card_image} alt="Picture"></img>
                </div>
            </div>
        )
    }
}
export default  ArticleComponentPicture;