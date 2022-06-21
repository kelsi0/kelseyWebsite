import React from 'react';
import { Link } from 'react-router-dom';

const CardComponent = ({ id, title, date, card_details }) => {
    console.log(card_details);
    return (
        <div className="cardBox">
            <div className="col-md-auto">
                <Link className="cardTitle"
                to={{
                    pathname:"/blogArticlePage",
                    search:"?id="+id
                    }}>{title}</Link>
                <h6 className="my-3">{date}</h6>
                <img className="img-fluid smallImageBox" src={card_details.card_image} alt={title}></img>
                <p className="textCardBox">{card_details.summary}</p>
            </div>
        </div>
    );
}
export default CardComponent;