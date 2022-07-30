import React from 'react';

const Movie = ({movie:{original_title, overview, poster_path}}) => {
    const imagePath = 'https://image.tmdb.org/t/p/w500'
    return (
        <div>
            <h2>
            original_title: {original_title}
            </h2>
            <div>
            overview: {overview}
            </div>
            <div>
                <img src={`${imagePath}${poster_path}`} alt=""/>
            </div>
        </div>
    );
};

export default Movie;