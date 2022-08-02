import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {genresActions} from "../../redux";
import Genre from "../Genre/Genre";

const Genres = () => {
    const {genres} = useSelector(state => state.genres);
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(genresActions.getAll())
    })

    return (
        <div>
            {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export default Genres;