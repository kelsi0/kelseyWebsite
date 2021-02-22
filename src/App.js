import React, {Component} from 'react';
import PageWrapper from './components/PageWrapper';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

//Pages
import Home from './components/Pages/Home'; 
import About from './components/Pages/About'; 
import Contact from './components/Pages/Contact';
import Skill from './components/Pages/Skill';
import MainBlogPage from './components/Pages/MainBlogPage';
import BlogArticlePage from './components/Blog/BlogArticlePage';
import MainMusicBlogPage from './components/Pages/MainMusicBlogPage';
import MainCodeBlogPage from './components/Pages/MainCodeBlogPage';
class App extends Component {
  render() {
    return(
      <Router>
        <PageWrapper>
          
          <Route
          exact={true}
          path="/kelseyWebsite"
          component={Home}
          />

          <Route
            path="/about"
            component={About}
          />

          <Route
          path="/contact"
          component={Contact}
          />

          <Route
          path="/skill"
          component={Skill}
          />

          <Route
          path="/mainBlogPage"
          component={MainBlogPage}
          />

          <Route
          path="/blogArticlePage"
          component={BlogArticlePage}
          />

          <Route
          path="/mainMusicBlogPage"
          component={MainMusicBlogPage}
          />

          <Route
          path="/mainCodeBlogPage"
          component={MainCodeBlogPage}
          />

        </PageWrapper>
      </Router>
    );
  }
}


export default App;