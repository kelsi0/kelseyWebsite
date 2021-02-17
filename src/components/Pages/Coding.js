import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../../assets/img/Coding/Hamble.jpg'; 

// Re-Usabled components
import CodingContent from '../Common/CodingContent'


class Coding extends Component {

    render(){
        return(
            <div className="custom-content-div">
                <Header
                    title="Coding"
                    subtitle="WHAT I'VE DONE SO FAR"
                    buttonText="Tell me more"
                    link="/skills"
                    showButton={false}
                    image={image}
                />

                <CodingContent />

            </div>
        )
    }
}

export default Coding;