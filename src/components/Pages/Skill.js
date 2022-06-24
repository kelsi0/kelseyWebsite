import React, { useState, useEffect } from 'react';
import useFetchHero from './useFetchHero';

import Header from '../Common/Header';
import Skills from '../Common/Skills';

const query = `
{	
	heroCollection (where: {subtitle: "Skills"}) {
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

const Skill = () => {
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
                <Skills />
            </section>
        </div>
    );
}

export default Skill;