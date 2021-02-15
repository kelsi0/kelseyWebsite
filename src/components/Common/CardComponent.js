import React, {Component} from 'react';
import image from "../assets/img/Ham.jpg";

class CardComponent extends Component {
    render(){
        return(
        <div className="cardBox">
        <div className="col-md-12">
            <a className="my-3" href="url">TITLE</a>
            <h6 className="my-3">DATE</h6>
            <img className="img-fluid smallImageBox" src={image} alt="Picture"></img>
            <p className="text-muted">summary</p>
        </div>
        </div>
        )
    }
}
export default CardComponent;