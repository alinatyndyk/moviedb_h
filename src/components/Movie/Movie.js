import React from 'react';

import css from './Movie.css'

const Movie = ({movie:{original_title, poster_path}}) => {
    const imagePath = 'https://image.tmdb.org/t/p/w200'
    return (
        <div className={'movie-card'}>
            <h4>
            {original_title}
            </h4>
                <img className={'movie_poster'} src={`${imagePath}${poster_path}`} alt=""/>
        </div>
    );
};

export default Movie;