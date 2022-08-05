
import css from './Movie.css'
import {useEffect, useState} from "react";
import {Link, Navigate, useNavigate} from "react-router-dom";
import MovieItemPage from "../../pages/MovieItemPage/MovieItemPage";

const Movie = ({movie: {id,overview,original_title, poster_path, popularity}}) => {
    const imagePath = 'https://image.tmdb.org/t/p/w200'

    const [getId, setId] = useState(null)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=fdea29670475ad4a050063e2951fc8a5`)
            .then(value => value.json())
            .then(value => {
                setId(value)
            })
    }, [])
    return (
        <div className={'movie-card'} onClick={()=> console.log(overview)}>
            <h4>
                {original_title}
            </h4>
            <p>
                popularity - {Math.round(popularity)}
            </p>
            <img className={'movie_poster'} src={`${imagePath}${poster_path}`} alt=""/>
            <Link to={'movieItem'}>getDetails</Link>
        </div>
    );
};

export default Movie;