import React, {Component} from 'react';
import TeamItem from './TeamItem';

import img1 from '../../assets/img/Team/Team1.jpg';
import img2 from '../../assets/img/Team/Team2.jpg';
import img3 from '../../assets/img/Team/Team3.jpg';

const team = [
    {title: 'Kelsey Sheridan', role: 'The Human', img: img1, github: "https://github.com/kelsi0", facebook: "https://www.facebook.com/Kelsi0", linkedin: "https://www.linkedin.com/in/kelsey-jane-steed-sheridan/"},
    {title: 'Misha', role: 'The Cat', img: img2, twitter: '', facebook: '', linkedin: ''},
    {title: 'Hamble', role: 'The Dog', img: img3, twitter: '', facebook: 'https://www.facebook.com/hamble.scrambles', linkedin: ''}
]

class Team extends Component {
    render(){
        return(
            // <!-- Team-->
            <section class="page-section bg-light" id="team">
                <div class="container">
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase">My Amazing Team</h2>
                        <h3 class="section-subheading text-muted">Each one invaluable!</h3>
                    </div>
                    <div class="row">
                        {team.map((item, index) => {
                            return <TeamItem {...item} key ={index} />
                        })}
                    </div>
                    <div class="row">
                        <div class="col-lg-8 mx-auto text-center"><p class="large text-muted">Misha has been by my side for 12 years now, her favourite things include naps, food and demanding attention. Hamble and I were partnered in July 2019 and have been an unstoppable team ever since! Her favourite things are picking up tins of soup in the supermarket and meeting other working dogs!</p></div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Team;