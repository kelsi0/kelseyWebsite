import React, {Component} from 'react';
import PortfolioItem from "./PortfolioItem";

import img1 from '../assets/img/Portfolio/CodeNation.png';
import img2 from '../assets/img/Portfolio/climb.png';
import img3 from '../assets/img/Portfolio/Hamble.jpg';
import img4 from '../assets/img/Portfolio/Grad.jpg';
import img5 from '../assets/img/Portfolio/claasicalPerf.png';
import img6 from '../assets/img/Portfolio/bike.jpg';

const portfolio = [
    {title: 'CodeNation Bootcamp', subtitle:'Software Development Course', image: img1},
    {title: 'Return To Climbing', subtitle:'My return to the world of climbing as a paraclimber', image: img2},
    {title: 'Partnership with Hamble', subtitle:'Allowing me to return to work', image: img3},
    {title: 'Graduation', subtitle:'My Music Degree', image: img4},
    {title: 'Recitals', subtitle:'Classical and Pop Music', image: img5},
    {title: 'Motorbikes', subtitle:'Speedway and exploring the UK!', image: img6}
]

class Portfolio extends Component {
    render(){
        return(
            // <!-- Portfolio Grid-->
            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">My Portfolio</h2>
                        <h3 className="section-subheading text-muted">Find all the things I've created or done with code, music and climbing</h3>
                    </div>
                    <div className="row">
                        {portfolio.map((item, index) => {
                            return <PortfolioItem {...item} key ={index} />
                        })}
                    </div>
                </div>
            </section>
        )
    }
}

export default Portfolio;