import React, { useState, useEffect } from 'react';
import useFetchHero from './useFetchHero';

// Re-Usabled components
import Header from '../Common/Header';
import Skills from "../Common/Skills";
import Timeline from "../Common/Timeline";

const query = `
{	
	heroCollection (where: {title: "Hi! I'm Kelsey Sheridan,"}) {
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

const Home = () => {
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
                link="/skill"
                showButton={false}
                image={data.bannerImage.url}
            />
            <Skills />
            <Timeline />
        </div>
    );
}

export default Home;
