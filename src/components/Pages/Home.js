import React, { useState, useEffect } from 'react';
import Header from '../Common/Header';
import image from '../../assets/img/Home/home.jpg';

// Re-Usabled components
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
    const [page, setPage] = useState(null);

    useEffect(() => {
        window
          .fetch(`https://graphql.contentful.com/content/v1/spaces/69v5xsxlo5gg/`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              // Authenticate the request
              Authorization: "Bearer lFmI8kh54j6iuWfUmrGD_PhTZehXoU0IAhfOvI-o4Ns",
            },
            // send the GraphQL query
            body: JSON.stringify({ query }),
          })
          .then((response) => response.json())
          .then(({ data, errors }) => {
            if (errors) {
              console.error(errors);
            }
    
            // rerender the entire component with new data
            setPage(data.heroCollection.items[0]);
          });
      }, []);

      console.log(page);
    
    if (!page) {
    return "Loading...";
    }

    return(
        <div className="custom-content-div">
            <Header
                title={page.title}
                subtitle={page.subtitle}
                buttonText="Tell me more"
                link="/skill"
                showButton={false}
                image={page.bannerImage.url}
            />
            <Skills />
            <Timeline />
        </div>
    );
}

export default Home;
