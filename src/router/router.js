import About from '../components/About';
import Footer from '../Footer';
import Header from '../Header';
import Home from '../components/Home';
import Locations from '../components/Locations';
import Menu from '../components/Menu';
import MobileHeader from '../MobileHeader';
import Parties from '../components/Parties';
import React from 'react';
import { Route } from 'react-router-dom';

export default () => (
    <React.Fragment>
        <Header />
        <MobileHeader />
        <Route exact path='/' component={ Home } />
        <Route path='/menu' component={ Menu } />
        <Route path='/parties' component={ Parties } />
        <Route path='/about' component={ About } />
        <Route path='/locations' component={ Locations } />
        <Footer />
    </React.Fragment>
);