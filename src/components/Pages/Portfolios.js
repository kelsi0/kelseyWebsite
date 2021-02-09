import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/Portfolios/portfolio.jpg';
import Portfolio from '../Common/Portfolio';


class Portfolios extends Component{
    render(){
        return(
            <div>
                <Header
                    title=""
                    subtitle="Portfolio"
                    buttonText="Tell me more"
                    link="/services"
                    showButton={false}
                    image={image}
                />

                <section>
                    <Portfolio />
                </section>
            </div>
        )
    }
}

export default Portfolios;