import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/About/about.jpg'
import Timeline from '../Common/Timeline';
import Team from '../Common/Teams';

class About extends Component{
    render(){
        return(
            <div>
                <Header
                    title="About me!"
                    subtitle="It's all the cat."
                    buttonText="Tell me more"
                    link="/services"
                    showButton={false}
                    image={image}
                />

                <section>
                    <Timeline />
                    <Team />
                </section>
            </div>
        )
    }
}

export default About;