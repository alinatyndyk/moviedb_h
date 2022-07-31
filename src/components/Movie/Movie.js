import React from 'react';

import css from './Movie.css'

const Movie = ({movie:{original_title, poster_path}}) => {
    const imagePath = 'https://image.tmdb.org/t/p/w300'
    return (
        <div className={'movie-card'}>
            <h2>
            {original_title}
            </h2>
                <img className={'movie_poster'} src={`${imagePath}${poster_path}`} alt=""/>
            <div>
            </div>
        </div>
    );
};

export default Movie;