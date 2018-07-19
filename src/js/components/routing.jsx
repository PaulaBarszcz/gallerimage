import React from 'react';
import ReactDOM from 'react-dom';
import {Search} from './search.jsx';
import {Geolocation} from './geolocation.jsx';
import {NotFound} from './notFound.jsx';
import {Navigation} from './navigation.jsx';
import {Landing} from './landing.jsx';
import {
    Router,
    PropsRoute,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    createMemoryHistory
} from 'react-router';

class Routing extends React.Component {

    render() {
        const memoryHistory = createMemoryHistory();


        return <Router history={memoryHistory}>
            <Route path='/' component={Navigation}>
                <IndexRoute component={Landing}/>
                <Route path='/search' component={Search} sub='konfigurator'/>
                <Route path='/geolocation' component={Geolocation}/>
                <Route path='*' component={NotFound}/>
            </Route>
        </Router>
    }
}

export {Routing}