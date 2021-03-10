import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'
import Family from '../src/Container/Family/family';
import Detail from '../src/Container/Detail/detail';
import {BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Route path="/" component={Family} exact />
        <Route path="/detail/:id" component={Detail} exact />
        <Footer />
      </Router>
    );
  }
}

export default App;
