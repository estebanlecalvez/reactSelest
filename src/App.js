import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import './css/global.css';


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

