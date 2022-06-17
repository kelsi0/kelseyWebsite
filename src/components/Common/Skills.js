import React from 'react';
import SingleSkills from "./SingleSkills";

const skills = [
    {title: 'Software Development', description: "I entered the world of software engineering in January 2021 and completed a three week bootcamp with CodeNation. Having gained my first role with We Do Code as a junior software engineer, I was able to learn rapidly and contribute to the business. Progressively rapidly, I was promoted to software engineer and line manager after six months and having successfully delivering a project as tech lead. Since then I have continued to learn and grow as well as complete passion projects to improve my skill set in other tech stacks. I have now completed projects in both front and backend and have enjoyed both experiences.", icon: 'fa-laptop'},
    {title: 'Music', description: "In July 2018, I graduted with a 2:1 Musical Arts degree from Salford University. I had began my musical journey with piano lessons as a child and then choosing to study music further at BTEC and finally degree level. At the start of my degree, I continued to develop my voice and music theory when I fell ill and was diagnosed with Chronic Fatigue Syndrome. This severly impacted my studies until my final year when I switched to the Musical Arts degree and focused on vocal and clarinet performance and composition. I found the strength in my voice and then how to develop and control it. Currently, I am working on my own songs and my first EP in my free time while I focus on finding my feet and building a career in IT.", icon: 'fa-music'},
    {title: 'Climbing', description: 'During my youth, I gained experience climbing competitively both indoors and outdoors. I began climbing at age seven in the south of France and started competing in departmental and regional competitions from 2009 to 2013. While training for these competitions I was fortunate enough to experience both indoor walls and outdoor routes. In 2013, I moved to Exeter, UK, and joined a squad training for BMC competitions but was unable to continue due to the progression of my disability. I am currently trying entirely new methods of climbing but I am sure I will make a return to competitive climbing in the near future.', icon: 'fa-mountain'}
]

const Skills = () => {
    return(
        // <!-- Skills-->
        <section className="page-section" id="Skills"> 
        {/* Change this in CSS */}
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Skills</h2>
                    <h3 className="section-subheading text-muted">As life has progressed and grown, so too has my skillset.</h3>
                </div>
                <div className="row text-center">
                    {skills.map((skill, index) => {
                        return <SingleSkills {...skill} key = {index} />
                    })}
                </div>
            </div>
        </section>
    );
}

export default Skills;