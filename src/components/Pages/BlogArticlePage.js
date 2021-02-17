import React, {Component} from 'react';
import BlogArticle from '../Blog/BlogArticle';
import CardComponent from '../Common/CardComponent';
import data from "../../data";

import {
    BrowserRouter as Router,
    Link,
    useLocation
} from "react-router-dom";

const postsDataList = data.posts.climbing_posts

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function BlogArticlePage (){
    let query = useQuery();
    let id = query.get("id");
    return(
        <section className="page-section">
            <div className="container text-center">
                <div className="col-md-12">
                    <BlogArticle id={id}/>
                </div>
            </div>
        </section>
    )
}

export default BlogArticlePage;