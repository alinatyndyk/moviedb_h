import css from './Header.css'

import React from 'react';
import {Link, Navigate, Route, Routes} from "react-router-dom";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";
import GenresPage from "../../pages/GenresPage/GenresPage";

const Header = () => {
    return (
        <div>
            <div className={'header'}>
                <div className={'header_logo'}>
                    Thats movies
                </div>
                <div className={'header_navigation'}>
                        <Link className={'header-navigation-link'} to={'/'}>Home</Link>
                    <div>

                    </div>
                    <div>TV Series</div>
                </div>
            </div>

            <Routes>
                <Route index element={<Navigate to={'movies'}/>}/>
                <Route path={'movies'} element={<MoviesPage/>}/>
                <Route path={'genres'} element={<GenresPage/>}/>
            </Routes>
        </div>
    );
};

export default Header;
