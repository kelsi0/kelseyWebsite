import React, {Component} from 'react';

class BlogArticle extends Component {
    render(){
        return(
            <div className="cardBox">
                <div className="col-md-12">
                    <a className="my-3" href="url">{this.props.title}</a>
                    <h6 className="my-3">{this.props.date}</h6>
                    <img className="img-fluid smallImageBox" src={this.props.card_details.card_image} alt="Picture"></img>
                    <p className="text-muted">{this.props.card_details.summary}</p>
                </div>
            </div>
        )
    }
}
export default BlogArticle;
