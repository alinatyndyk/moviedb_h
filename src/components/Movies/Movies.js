import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Movie from "../Movie/Movie";
import {moviesActions} from "../../redux";
import css from './Movies.css'
//import {useLocation} from "react-router-dom";

const Movies = () => {
    const {movies} = useSelector(state => state.movies);
    const dispatch = useDispatch()
    //const {search} = useLocation()

    useEffect(()=>{
        dispatch(moviesActions.getAll())
    })
    return (
        <div className={'movies'}>
            {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export default Movies;