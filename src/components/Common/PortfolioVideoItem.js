import React, {Component} from 'react';

class PortfolioVideoItem extends Component {
    render(){
        return(
        <div className="col-lg-12 col-sm-12 mb-4">
            <div className="portfolio-item">
                    {/* <div className="portfolio-hover">
                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                    </div> */}
                    <iframe width="630" height="352" src="https://www.youtube.com/embed/JbLuXg4CN5g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">{this.props.title}</div>
                    <div className="portfolio-caption-subheading text-muted">{this.props.subtitle}</div>
                </div>
            </div>
        </div>
        )
    }
}

export default PortfolioVideoItem;