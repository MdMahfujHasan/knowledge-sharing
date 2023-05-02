/* eslint-disable */
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <div className='header'>
                <h1 className='header-title'>Knowledge Sharing</h1>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG6a6KfKK66Jy1eCuDau7yp2rb5dIfGvl45g&usqp=CAU" alt="User photo" />
            </div>
            <hr style={{ marginBottom: '30px' }} />
        </nav>
    );
};

export default Header;