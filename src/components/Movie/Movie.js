import React, {useEffect} from 'react';

import css from './Movie.css'

const Movie = ({movie: {id, original_title, poster_path, popularity}}) => {
    const imagePath = 'https://image.tmdb.org/t/p/w200'

    return (
        <div className={'movie-card'}>
            <h4>
                {original_title}
            </h4>
            <p>
                popularity - {Math.round(popularity)}
            </p>
            <img className={'movie_poster'} src={`${imagePath}${poster_path}`} alt=""/>
        </div>
    );
};

export default Movie;