import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const Header = ({ image, title, subtitle, showButton, link, buttonText }) => {
        //TODO BN: remove arbitrary alt of image
    return(
        /* <!-- Masthead--> */
        <header className="masthead" >       
            <div className="headerContainer">
                <img src={image} alt={title}  className="img-fluid imageBox"/> 
                <div className="masthead-subheading">{title}</div>
                <div className="masthead-heading text-uppercase">{subtitle}</div>
                <div className="masthead-button">{showButton &&
                    <Link className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" to={link}>{buttonText}</Link>
                }
                </div>
            </div>
        </header>
    );           
}

export default Header;