import React from 'react';
import CardComponent from "../Blog/CardComponent";
import data from "../../data";
import Sidebar from '../Common/SideBar';

const postsDataList = data.posts.climbing_posts

const MainBlogPage = () => {
    return(
        <section className="page-section"> 
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">My Climbing Journey</h2>
                    <h3 className="section-subheading text-muted">From regional competitions to returning as a paraclimber!</h3>
                    {postsDataList.map((item, index) => {
                        return <CardComponent {...item} key ={index} />
                    })}
                </div>
            </div>
            <div>
                <Sidebar />
            </div>
        </section>
    );
}

export default MainBlogPage;
