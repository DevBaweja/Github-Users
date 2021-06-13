import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import About from './components/pages/About';

// Utils
import Navbar from './components/Utils/Navbar';
import User from './components/User/User';
// import Alert from './components/Alert';
import NotAvailable from './components/pages/NotAvailable';

import { Container as BContainer } from 'react-bootstrap';
import GithubState from './context/github/GithubState';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
library.add(faUserAstronaut);

const App = () => {
    return (
        <GithubState>
            <div className="App">
                <Navbar />
                <BContainer>
                    {/* <Alert /> */}
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/user/:username" component={User} />
                        <Route component={NotAvailable} />
                    </Switch>
                </BContainer>
            </div>
        </GithubState>
    );
};

export default App;
