import React, {Component} from 'react';
import data from "../../data";
import ArticleComponentPicture from './ArticleComponentPicture';
import ArticleComponentVideo from './ArticleComponentVideo';
import ArticleComponentText from './ArticleComponentText';

const postData = data.posts.climbing_posts

class BlogArticle extends Component {
    render(){
        return(
            <div className="cardBox">
                <div className="col-md-12">
                    <a className="my-3" href="url">{this.props.title}</a>
                    <h6 className="my-3">{this.props.date}</h6>
                    {postData.map((item, index) => {
                                return <ArticleComponentPicture {...item} key ={index} />
                                return <ArticleComponentVideo {...item} key ={index} />
                                return <ArticleComponentText {...item} key ={index} />
                    })}                
                </div>
            </div>
        )
    }
}
export default BlogArticle;
