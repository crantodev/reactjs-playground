import * as React from 'react';

// Components
import { Header } from './components/Header';
import { Main } from './components/Main';

export class App extends React.Component {

    render () {
        return (
            <div>
                <Header />
                <Main />
            </div>
        );
    }
}