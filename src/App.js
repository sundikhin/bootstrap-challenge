import React, { Component } from 'react';
import HeaderNav from './HeaderNav';
import Carousel from './Carousel';
import ContentBubble from './ContentBubble';
import FeaturetteContainer from './FeaturetteContainer';
import Footer from './Footer';
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderNav />
        <Carousel />
        <ContentBubble />
        <FeaturetteContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
