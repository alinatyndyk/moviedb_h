import css from './Header.css'

import React from 'react';
import {Link, Navigate, Route, Routes} from "react-router-dom";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";

const Header = () => {
    return (
        <div className={'header'}>
            <div className={'header_logo'}>
                Filmix
            </div>
        </div>
    );
};

export default Header;
