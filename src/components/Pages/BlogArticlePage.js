import React, {Component} from 'react';
import BlogArticle from '../Blog/BlogArticle';
import CardComponent from '../Common/CardComponent';
import data from "../../data";

const postsDataList = data.posts.climbing_posts

class BlogArticlePage extends Component {
    render(){
        return(
            <section className="page-section">
                <div className="container text-center">
                    <div className="col-md-12">
                        {postsDataList.map((item, index) => {
                            return <BlogArticle {...item} key ={index} />
                        })}
                    </div>
                </div>
            </section>
        )
    }
}

export default BlogArticlePage;