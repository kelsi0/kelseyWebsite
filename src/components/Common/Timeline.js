import React, {Component} from 'react';
import TimelineItem from './TimelineItem';
import image1 from '../../assets/img/About/About1.png';
import image2 from '../../assets/img/About/About2.png';
import image3 from '../../assets/img/About/About3.png';
import image4 from '../../assets/img/About/About4.png';

const timeline = [
    {Date: '2008-2014', item: 'Climbing', description: 'My Climbing journey began, as I began to improve I began competing in Southern France. After a move to UK, I joined the Youth Squad at Quay Climbing Center.', image: image1},
    {Date: '2013-2018', item: 'Musical Journey Began', description: 'On a whim, I dropped by the Academy of Music and Sound in Exeter and left with an audition date set to begin my studies there. After completing my BTEC, I began my degree in Pop Music and Recording at the University of Salford. Switching to Music Arts in my final year, I graduated in 2018', image: image2},
    {Date: '2018-2020', item: 'Post Uni', description: 'After completing my degree, I focused on recovering my health and then launched myself into private piano tuition. I bgean experimenting with coding by building myself a website and updating it.', image: image3},
    {Date: 'March 2020', item: 'Covid-19', description: 'With all piano tuition halted due to Covid, I launched headfirst into finding a new career path. Beginning my 3 week course with CodeNation in Jan 2021, I developed a passion for software development and have been expanding my knowledge ever since.', image: image4},
]

class Timeline extends Component {
    render(){
        return(
            // <!-- About-->
            <section className="page-section" id="about">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">About</h2>
                        <h3 className="section-subheading text-muted">All About me and my journey so far!.</h3>
                    </div>
                    <ul className="timeline">
                        {timeline.map((item, index) => {
                            return <TimelineItem {...item} key = {index} />
                        })}

                        <li className="timeline-inverted">
                            <div className="timeline-image">
                                <h4>
                                    More 
                                    <br />
                                    to
                                    <br />
                                    come!
                                </h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Timeline;