import React, {Component} from 'react';

class TeamItem extends Component {
    render(){
        return(
            <div class="col-lg-4">
            <div class="team-member">
                <img class="mx-auto rounded-circle" src={this.props.img} alt="" />
                <h4>{this.props.title}</h4>
                <p class="text-muted">{this.props.role}</p>
                <a class="btn btn-dark btn-social mx-2" href={this.props.github}><i class="fab fa-github"></i></a>
                <a class="btn btn-dark btn-social mx-2" href={this.props.facebook}><i class="fab fa-facebook-f"></i></a>
                <a class="btn btn-dark btn-social mx-2" href={this.props.linkedin}><i class="fab fa-linkedin-in"></i></a>
            </div>
        </div>
        )
    }
}
export default TeamItem;