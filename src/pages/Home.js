import React, { Component } from 'react';
import catalog from '../catalog.json'
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <>
                <h1>This week's Movies</h1>

                {catalog.map(movie =>
                    <Link
                        key={`${movie.title}-${movie.id}`}
                        to={`./movie/${movie.id}`}
                    >
                        <p>{movie.title}</p>
                    </Link>
                )}
            </>
        );
    }
}

export default Home;