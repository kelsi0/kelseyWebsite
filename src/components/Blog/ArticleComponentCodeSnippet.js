import React, {Component} from 'react';

class ArticleComponentCodeSnippet extends Component {
    render(){
        return(
            <section class="row">
                <div class="col-lg-12 mx-auto text-center paddingTop">
                    <p class="large text-muted">{this.props.codeTitle}</p>
                        <iframe src={this.props.trinket_url} width="90%" height="500" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe> 
                </div>
            </section>
        )
    }
}

export default ArticleComponentCodeSnippet;