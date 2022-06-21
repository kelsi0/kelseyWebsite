import React from 'react';
import CardComponent from "../Blog/CardComponent";
import data from "../../data";
import Sidebar from '../Common/SideBar';

const postsDataList = data.posts.code_posts

const MainCodeBlogPage = () => {
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
                    <h2 className="section-heading text-uppercase">Coding</h2>
                    <h3 className="section-subheading text-muted">"WHAT I'VE DONE SO FAR</h3>
                    {postsDataList.map((item, index) => {
                        return <CardComponent {...item} key ={index} />
                    })}
                </div>
                <Sidebar />
            </div>                   
        </section>
    );
}

export default MainCodeBlogPage;
