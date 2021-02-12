import React, {Component} from 'react';
import Portfolio from '../Common/Portfolio';



class ClimbingContent extends Component {
    render(){
        return(
            <section class="page-section bg-light" id="team">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">My Climbing Journey</h2>
                    <h3 class="section-subheading text-muted">From regional competitions to returning as a paraclimber!</h3>
                </div>
                
            <Portfolio />

            </div>
            </section>
        )
    }
}
export default ClimbingContent;