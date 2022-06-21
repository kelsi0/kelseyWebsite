import React from 'react';
import CardComponent from "../Blog/CardComponent";
import data from "../../data";
import Sidebar from '../Common/SideBar';

const postsDataList = data.posts.code_posts

const MainCodeBlogPage = () => {
    return(
        <section className="page-section"> 
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Coding</h2>
                    <h3 className="section-subheading text-muted">WHAT I'VE DONE SO FAR</h3>
                    {postsDataList.map((item) => {
                        return <CardComponent {...item} key={item.id} />
                    })}
                </div>
                <Sidebar />
            </div>                   
        </section>
    );
}

export default MainCodeBlogPage;
