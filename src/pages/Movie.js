import React, { Component } from 'react';
import catalog from '../catalog.json'




class Movie extends Component {


    render() {
        const id = this.props.match.params.id
        console.log(this.props.match.params.id);

        const movie = catalog.find(film => film.id == id)
        console.log(movie)
        return (
            <div>
                <h1>{movie.title}</h1>
                <h3>Director {movie.director}</h3>
                <img alt={movie.id} src={movie.image} />
                <p>{movie.description}</p>
                <p>Cast : {movie.stars} </p>  

            </div>
        );
    }
}

export default Movie;


