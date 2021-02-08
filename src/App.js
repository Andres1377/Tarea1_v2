import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import FragancesMen from './pages/fragrances-men/fragrances-men.component';
import FragancesWoman from './pages/fragrances-woman/fragrances-woman.component';
import FragancesUnisex from './pages/fragrances-unisex/fragrances-unisex.component';
import Contact from './pages/contact/contact.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';


class App extends React.Component{
    constructor(){
        super();
    }
    render() {
        return (
          <div>
            <Header />
            <switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/fragancesmen" component={FragancesMen} />
              <Route path="/fraganceswoman" component={FragancesWoman} />
              <Route path="/fragancesunisex" component={FragancesUnisex} />
              <Route path="/contact" component={Contact} />
            </switch>
          </div>
        );
    }
};
export default App;
