import React, { useState, useEffect } from 'react';
import useFetchHero from './useFetchHero';

import Header from '../Common/Header';
import Timeline from '../Common/Timeline';
import Team from '../Common/Teams';

const query = `
{	
	heroCollection (where: {title: "About me!"}) {
  	items {
    	title,
      subtitle,
      bannerImage {
        title
        url
      },
      button
  	}
	}
}`

const About = () => {
    const { data, fetchData } = useFetchHero();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      fetchData(query);
      setIsLoading(false);
    }, []);
    
    if (isLoading | !data) {
    return "Loading...";
    }

    return(
        <div className="custom-content-div">
            <Header
                title={data.title}
                subtitle={data.subtitle}
                buttonText="Tell me more"
                link="/services"
                showButton={false}
                image={data.bannerImage.url}
            />

            <section>
                <Timeline />
                <Team />
            </section>
        </div>
    );
}

export default About;