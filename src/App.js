import React, { Component } from 'react';
import Header from './Header';
import Home from './Home';
import Inscription from './Inscription';
import Footer from './Footer';
import './css/global.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Home />
        <Inscription />
        <Footer />
      </div>
    );
  }
}

