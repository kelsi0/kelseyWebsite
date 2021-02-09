import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {

    render(){
        //TODO BN: remove arbitrary alt of image
        return(
            /* <!-- Masthead--> */
            <header className="masthead" >       
                <img src={this.props.image} alt="Girl in a jacket"  className="img-fluid"/> 
                 <div className="container">
                    <div className="masthead-subheading">{this.props.title}</div>
                    <div className="masthead-heading text-uppercase">{this.props.subtitle}</div>
                    {this.props.showButton &&
                        <Link className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" to={this.props.link}>{this.props.buttonText}</Link>
                    }
                </div>
            </header>
        )        
    }
}

export default Header;