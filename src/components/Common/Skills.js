import React, {Component} from 'react';
import SingleSkills from "./SingleSkills";

const skills = [
    {title: 'Software Development', description: "I began learning the basics of computer science alongside my university studies by becoming a member of the University's Computing Society in which I started to learn the basic syntax of code before moving on to build some simple C# projects. As I became familiar with the syntax of code I started to widen my knowledge and familiarise myself with Python, Java, and Web Development as well as he basics of programming and data analysis. I applied my new skills by building and maintaining a website to promote my private music lessons. I am currently using various online resources to solve programming puzzles and further my experience.", icon: 'fa-laptop'},
    {title: 'Music', description: "In July 2018, I graduted with a 2:1 Musical Arts degree from Salford University. I had began my musical journey with piano lessons as a child and then choosing to study music further at BTEC and finally degree level. At the start of my degree, I continued to develop my voice and music theory when I fell ill and was diagnosed with Chronic Fatigue Syndrome. This severly impacted my studies until my final year when I switched to the Musical Arts degree and focused on vocal and clarinet performance and composition. I found the strength in my voice and then how to develop and control it. Currently, I am working on my own songs and my first EP in my free time while I focus on finding my feet and building a career in IT.", icon: 'fa-music'},
    {title: 'Climbing', description: 'During my youth, I gained experience climbing competitively both indoors and outdoors. I began climbing at age seven in the south of France and started competing in departmental and regional competitions from 2009 to 2013. While training for these competitions I was fortunate enough to experience both indoor walls and outdoor routes. In 2013, I moved to Exeter, UK, and joined a squad training for BMC competitions but was unable to continue due to the progression of my disability. I am currently trying entirely new methods of climbing but I am sure I will make a return to competitive climbing in the near future.', icon: 'fa-mountain'}
]

class Skills extends Component {
    render(){
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
        )
    }
}

export default Skills;