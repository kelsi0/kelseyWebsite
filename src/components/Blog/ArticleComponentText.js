import React, {Component} from 'react';

class ArticleComponentText extends Component {
    render(){
        return(
            <div>
                <p className="text-muted">{this.props.post_elements.text}</p>
            </div>
        )
    }
}
export default  ArticleComponentText;