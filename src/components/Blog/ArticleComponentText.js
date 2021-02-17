import React, {Component} from 'react';

class ArticleComponentText extends Component {
    render(){
        return(
            <div>
                <p className="text-muted">{this.props.text}</p>
            </div>
        )
    }
}
export default  ArticleComponentText;