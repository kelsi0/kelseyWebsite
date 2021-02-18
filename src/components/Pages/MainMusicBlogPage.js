import React, {Component} from 'react';
import CardComponent from "../Blog/CardComponent";
import data from "../../data";

const postsDataList = data.posts.music_posts

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
                        <h2 className="section-heading text-uppercase">My Climbing Journey</h2>
                        <h3 className="section-subheading text-muted">From regional competitions to returning as a paraclimber!</h3>
                        {postsDataList.map((item, index) => {
                            return <CardComponent {...item} key ={index} />
                        })}
                    </div>
                </div>
            </section>
        )
    }
}

export default MainBlogPage;
