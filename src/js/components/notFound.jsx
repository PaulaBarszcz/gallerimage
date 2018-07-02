import React from 'react';
import {
    Link
} from 'react-router';

class NotFound extends React.Component {
    render() {
        return  <div className="notFound">
            Nie znaleziono strony. Wróć do <Link to="/" style={{fontWeight: "bold"}}>strony głównej.</Link>
        </div>
    }
}

export {NotFound}