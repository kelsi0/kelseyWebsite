import React, {Component} from 'react';
import BlogArticle from '../Blog/BlogArticle';

class BlogArticlePage extends Component {
    render(){
        return(
            <section className="page-section">
                <div className="container text-center">
                    <div className="col-md-12">
                        <BlogArticle
                            title="TITLE"
                            date="DATE"
                            image=""
                            contents="Many Words"
                        />
                    </div>
                </div>
            </section>
        )
    }
}

export default BlogArticlePage;