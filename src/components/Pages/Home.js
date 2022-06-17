import React from 'react';
import Header from '../Common/Header';
import image from '../../assets/img/Home/home.jpg';

// Re-Usabled components
import Skills from "../Common/Skills";
import Timeline from "../Common/Timeline";
import Team from "../Common/Teams";

const Home = () => {
    return(
        <div className="custom-content-div">
            <Header
                title="Hi! I'm Kelsey Sheridan,"
                subtitle="IT'S NICE TO MEET YOU"
                buttonText="Tell me more"
                link="/skill"
                showButton={false}
                image={image}
            />
            <Skills />
            <Timeline />
            {/* <Team /> */}
        </div>
    );
}

export default Home;
