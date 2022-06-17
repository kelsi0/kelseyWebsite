import React from 'react';
import data from "../../data";
import ArticleComponent from './ArticleComponent';

const postData = data.posts.climbing_posts
const musicPostData = data.posts.music_posts
const codePostData = data.posts.code_posts

const BlogArticle = ({ id }) => {
    let post = null;
    postData.forEach(element => {
        if(element.id == id)
            post = element;
    });
    musicPostData.forEach(element => {
        if(element.id == id)
            post = element;
    });
    codePostData.forEach(element => {
        if(element.id == id)
            post = element;
    });

    return(
        <div className="cardBox">
            <div className="col-md-12">
                <h2 className="cardTitle">{post.title}</h2>
                <h6 className="my-3">{post.date}</h6>
                {post.post_elements.map((item, index) => {
                        return <ArticleComponent {...item} key ={index} />
                    })}

            </div>
        </div>
    );
}

export default BlogArticle;
