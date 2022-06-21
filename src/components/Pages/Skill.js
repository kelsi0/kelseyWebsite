import React from 'react';
import Header from '../Common/Header';
import image from '../../assets/img/SkillsPage/luna.jpg';
import Skills from '../Common/Skills';


const Skill = () => {
    return(
        <div className="custom-content-div">
            <Header
                title=""
                subtitle="Skills"
                buttonText="Tell me more"
                link="/services"
                showButton={false}
                image={image}
            />

            <section>
                <Skills />
            </section>
        </div>
    );
}

export default Skill;