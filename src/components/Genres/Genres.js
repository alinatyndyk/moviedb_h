import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {genresActions} from "../../redux";
import Genre from "../Genre/Genre";
import css from './Genres.css'

const Genres = () => {
    const {genres} = useSelector(state => state.genres);
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(genresActions.getAll())
    },[genresActions])


    return (
        <div className={'genres'}>
            {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export default Genres;