import React, {Component} from 'react';

class PortfolioItem extends Component {
    render(){
        return(
        <div className="col-lg-6 col-sm-8 mb-4">
            <div className="portfolio-item">
                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                    {/* <div className="portfolio-hover">
                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                    </div> */}
                    <img className="img-fluid portfolioImageBox" src={this.props.image} alt="" />
                </a>
                <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">{this.props.title}</div>
                    <div className="portfolio-caption-subheading text-muted">{this.props.subtitle}</div>
                </div>
            </div>
        </div>
        )
    }
}

export default PortfolioItem;