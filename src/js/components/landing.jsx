import React from "react";
import {Fetcher} from './fetcher.jsx';
import {
    Router,
    PropsRoute,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    createMemoryHistory
} from 'react-router';

class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return <div className="page-wrapper">
            <section>
                <div className="fetch-container">
                    <Fetcher/>
                </div>
            </section>
        </div>
    };
}

export {Landing}