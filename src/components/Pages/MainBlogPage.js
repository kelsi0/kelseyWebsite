import React, {Component} from 'react';
import image from "../assets/img/header-bg.jpg";
import SmallerHeader from "../Common/SmallerHeader";
import CardComponent from "../Common/CardComponent";

class MainBlogPage extends Component {

    render(){
        return(
            <section className="page-section"> 
            {/* TO-DO: Try to add this in later? */}
                {/* <SmallerHeader 
                    title="Welcome to the"
                    subtitle="Blog Page"
                    buttonText="Tell me more"
                    link="/skills"
                    showButton={false}
                    image={image}
                /> */}
            {/* Change this in CSS */}
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">BLOG PAGE TITLE</h2>
                        <h3 className="section-subheading text-muted">Small Description Here</h3>
                        <CardComponent />
                    </div>
                </div>
            </section>
        )
    }
}

export default MainBlogPage;
