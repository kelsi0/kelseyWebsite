import React, {Component} from 'react';
import image from "../assets/img/Ham.jpg";

class CardComponent extends Component {
    render(){
        return(
        <div className="cardBox">
        <div className="col-md-12">
            <a className="my-3" href="/blogArticlePage">{this.props.title}</a>
            <h6 className="my-3">{this.props.date}</h6>
            <img className="img-fluid smallImageBox" src={this.props.image} alt="Picture"></img>
            <p className="text-muted">{this.props.summary}</p>
        </div>
        </div>
        )
    }
}
export default CardComponent;