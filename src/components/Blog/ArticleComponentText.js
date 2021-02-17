import React, {Component} from 'react';

class ArticleComponentText extends Component {
    render(){
        return(
            <div className="cardBox">
                <div className="col-md-12">
                <p className="text-muted">{this.props.card_details.summary}</p>
                </div>
            </div>
        )
    }
}
export default  ArticleComponentText;