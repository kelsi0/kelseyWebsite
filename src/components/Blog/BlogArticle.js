import React, {Component} from 'react';
import data from "../../data";
import ArticleComponent from './ArticleComponent';

const postData = data.posts.climbing_posts

class BlogArticle extends Component {
    render(){
        let post = null;
        postData.forEach(element => {
            if(element.id == this.props.id)
                post = element;
        });

        return(
            <div className="cardBox">
                <div className="col-md-12">
                    <a className="my-3" href="url">{post.title}</a>
                    <h6 className="my-3">{post.date}</h6>
                    {post.post_elements.map((item, index) => {
                            return <ArticleComponent {...item} key ={index} />
                        })}

                </div>
            </div>
        )
    }
}
export default BlogArticle;
