import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/Climbing/Climbing.jpg'; 

// Re-Usabled components
import ClimbingContent from '../Common/ClimbingContent'


class Climbing extends Component {

    render(){
        return(
            <div className="custom-content-div">
                <Header
                    title="My journey to paraclimbing"
                    subtitle="Climbing"
                    buttonText="Tell me more"
                    link="/skills"
                    showButton={false}
                    image={image}
                />

                <ClimbingContent />

            </div>
        )
    }
}

export default Climbing;