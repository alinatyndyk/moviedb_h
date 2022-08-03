import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Movie from "../Movie/Movie";
import {moviesActions} from "../../redux";
import css from './Movies.css'
import {Link} from "react-router-dom";
//import {useLocation} from "react-router-dom";

const Movies = () => {
    const {movies} = useSelector(state => state.movies);
    const dispatch = useDispatch()
    //const {search} = useLocation()

    useEffect(() => {
        dispatch(moviesActions.getAll())
    }, [moviesActions])
    return (
        <div>
            <div className={'movies'}>
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
        </div>

    );
};

export default Movies;