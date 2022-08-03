import React, {useEffect, useState} from 'react';
import GenreItem from "./GenreItem";


const Genre = ({genre}) => {

    const [getId, setId] = useState({})
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=fdea29670475ad4a050063e2951fc8a5&with_genres=${genre.id}`)
            .then(value => value.json())
            .then(value => {
                setId(value.results)
            })
    },[])
    console.log(getId)
    return (
        <div>
            {genre.name}-{genre.id}
            <p>
                films list of this genre
            </p>
            <h2>Film List Outlet</h2>
            {getId.map(item => <GenreItem key={item.id} item={item}/>)}
        </div>
    );
};

export default Genre;
