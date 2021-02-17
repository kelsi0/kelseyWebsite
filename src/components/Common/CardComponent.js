import React, {Component} from 'react';
import { Link, Route } from 'react-router-dom';
import BlogArticlePage from '../Pages/BlogArticlePage';
// import Image from "../../assets/img/Climbing/Climbing.jpg"

class CardComponent extends Component {
    render(){
        console.log(this.props.card_details.card_image);
        return(
        <div className="cardBox">
        <div className="col-md-12">
            <Link to="/blogArticlePage">{this.props.title}</Link>
            <h6 className="my-3">{this.props.date}</h6>
            <img className="img-fluid smallImageBox" src={this.props.card_details.card_image} alt="Picture"></img>
            <p className="text-muted">{this.props.card_details.summary}</p>
        </div>
        </div>
        )
    }
}
export default CardComponent;