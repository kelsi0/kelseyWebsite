import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SmallerHeader extends Component {

    render(){
        return(
            /* <!-- Masthead--> */
            <header className="masthead" >       
                <div className="container">
                    <div className="masthead-subheading backgroundText">{this.props.title}</div>
                    <div className="masthead-heading text-uppercase backgroundText">{this.props.subtitle}</div>
                    <div className="masthead-button">{this.props.showButton &&
                        <Link className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" to={this.props.link}>{this.props.buttonText}</Link>
                    }
                    </div>
                </div>
            </header>
        )        
    }
}

export default SmallerHeader;