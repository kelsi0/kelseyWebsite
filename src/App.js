import React, {Component} from 'react';
import PageWrapper from './components/PageWrapper';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

//Pages
import Home from './components/Pages/Home'; 
import About from './components/Pages/About'; 
import Contact from './components/Pages/Contact';
import Skill from './components/Pages/Skill';
import Coding from './components/Pages/Coding'
import MainBlogPage from './components/Pages/MainBlogPage';
import BlogArticlePage from './components/Blog/BlogArticlePage';

class App extends Component {
  render() {
    return(
      <Router>
        <PageWrapper>
          
          <Route
          exact={true}
          path="/"
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
          path="/coding"
          component={Coding}
          />

          <Route
          path="/mainBlogPage"
          component={MainBlogPage}
          />

          <Route
          path="/blogArticlePage"
          component={BlogArticlePage}
          />

        </PageWrapper>
      </Router>
    );
  }
}


export default App;