import React from 'react';
import Movies from "../../components/Movies/Movies";
import Genres from "../../components/Genres/Genres";

const MoviesPage = () => {
    return (
        <div>
            <Genres/>
            <Movies/>
        </div>
    );
};

export default MoviesPage;