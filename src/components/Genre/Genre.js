import React, {useEffect, useState} from 'react';
import GenreItem from "./GenreItem";

import css from './Genre.css'


const Genre = ({genre}) => {

    const [getId, setId] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=fdea29670475ad4a050063e2951fc8a5&with_genres=${genre.id}`)
            .then(value => value.json())
            .then(value => {
                setId(value.results)
            })
    }, [])
    console.log(getId)

    return (
        <div>
            <h2>
                {genre.name}
            </h2>
            <div className={'genre'}>
                {getId.map(item => <GenreItem key={item.id} item={item}/>)}
            </div>
        </div>
    );
};

export default Genre;
