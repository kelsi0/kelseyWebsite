import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../../assets/img/Home/home.jpg';

// Re-Usabled components
import Skills from "../Common/Skills";
import Portfolio from "../Common/Portfolio";
import Timeline from "../Common/Timeline";
import Team from "../Common/Teams";

class Home extends Component {

    render(){
        return(
            <div className="custom-content-div">
                <Header
                    title="Hi! I'm Kelsey Sheridan,"
                    subtitle="IT'S NICE TO MEET YOU"
                    buttonText="Tell me more"
                    link="/skills"
                    showButton={false}
                    image={image}
                />

                <Skills />
                <Portfolio />
                <Timeline />
                <Team />
            </div>
        )
    }
}

export default Home;
