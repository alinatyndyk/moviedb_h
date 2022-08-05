import css from './Header.css'

import React from 'react';
const Header = () => {
    return (
        <div className={'header'}>
            <div className={'header_logo'}>
                Filmix
            </div>
            <div className={'header_nav'}>
                <div>
                    Home
                </div>
                <div>
                    TV shows
                </div>
                <div>
                    searchBar
                </div>
            </div>
        </div>
    );
};

export default Header;
