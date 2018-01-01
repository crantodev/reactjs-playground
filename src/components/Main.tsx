import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from '../sections/Home';
import { About } from '../sections/About';

export class Main extends React.Component {

    render () {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/about' component={About}/>
                </Switch>
            </main>
        );
    }
}