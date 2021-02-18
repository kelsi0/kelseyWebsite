import React, {Component} from 'react';

class ArticleComponentText extends Component {
    render(){
        return(
            <div>
                <p className="textCardBox">{this.props.text}</p>
            </div>
        )
    }
}
export default  ArticleComponentText;