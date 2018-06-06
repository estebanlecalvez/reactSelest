import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Banniere from './img/theme/img-slider-selest.png';
import './css/global.css';
import './css/main.css';



export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Footer />
      </div>
    );
  }
}

