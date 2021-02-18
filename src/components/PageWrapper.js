import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class PageWrapper extends Component {
    
    render(){

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
                                <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/skill">Skills</Link></li>
                                <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/about">About</Link></li>
                                <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/coding">Coding</Link></li>
                                <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/mainBlogPage">Climbing Blog</Link></li>
                                {/* <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/contact">Contact</Link></li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
                {this.props.children}

                <footer class="footer py-4">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-4 text-lg-left">Copyright © Kelsey Sheridan 2020</div>
                            <div class="col-lg-4 my-3 my-lg-0">
                                <a class="btn btn-dark btn-social mx-2" href="https://github.com/kelsi0"><i class="fab fa-github"></i></a>
                                <a class="btn btn-dark btn-social mx-2" href="https://www.facebook.com/Kelsi0"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/kelsey-jane-steed-sheridan/"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                            <div class="col-lg-4 text-lg-right">
                                {/* <a class="mr-3" href="#!">Privacy Policy</a>
                                <a href="#!">Terms of Use</a> */}
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}


export default PageWrapper;