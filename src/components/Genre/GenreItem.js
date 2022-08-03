import React from 'react';
import css from './Genre.css'

const GenreItem = ({item}) => {

    const imagePath = 'https://image.tmdb.org/t/p/w200'
    return (
        <div>
            <p>
                {item.title}
            </p>
            <div>
                <img className={'genre-item-img'} src={`${imagePath}${item.poster_path}`} alt=""/>
            </div>
        </div>
    );
};

export default GenreItem;