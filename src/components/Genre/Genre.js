import React from 'react';
import {Link, Route} from "react-router-dom";
import CurrentGenrePage from "../../pages/CurrentGenrePage/CurrentGenrePage";

const Genre = ({genre}) => {

    return (
        <div>

            <div>
                <Link to={`current/${genre.name}`}>{genre.name}</Link>
            </div>


        </div>
    );
};

export default Genre;