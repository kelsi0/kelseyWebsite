import React from 'react';
import BlogArticle from '../Blog/BlogArticle';

import { useLocation } from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const BlogArticlePage = () => {
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