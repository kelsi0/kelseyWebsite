import React from 'react';
import {Link} from 'react-router-dom';

const PageWrapper = ({ children }) => {
    return(
        <div>
            {/* <!-- Navigation--> */}
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div className="container">
                    <Link className="navbar-brand js-scroll-trigger" to="/"><img src="../assets/img/navbar-logo.svg" alt="" />Home</Link>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars ml-1"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ml-auto">
                            <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/about">About</Link></li>
                            <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/skill">Skills</Link></li>
                            <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/mainCodeBlogPage">Coding</Link></li>
                            <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/mainBlogPage">Climbing</Link></li>
                            <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/mainMusicBlogPage">Music</Link></li>
                            {/* <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/contact">Contact</Link></li> */}
                        </ul>
                    </div>
                </div>
            </nav>
            {children}

            <footer className="footer py-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 text-lg-left">Copyright © Kelsey Sheridan 2020</div>
                        <div className="col-lg-4 my-3 my-lg-0">
                            <a className="btn btn-dark btn-social mx-2" href="https://github.com/kelsi0"><i className="fab fa-github"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="https://www.facebook.com/Kelsi0"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/kelsey-jane-steed-sheridan/"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}


export default PageWrapper;