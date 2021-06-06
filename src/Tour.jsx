import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Nav from './Nav';
import Home from './Home';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import Card from './Card';
import { Switch, Route, Redirect } from 'react-router-dom';


const Tour = () => {
    return (
        <>
            <Nav />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/services" component={Services} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Redirect to="/" />
            </Switch>
        </>
    )
}
export default Tour;