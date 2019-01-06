import React from 'react';

import DrawerToggleButton from './sidedrawer/drawertogglebutton';
import './navbar.css';

const navBar = (props) => {
    return (
        <header className='toolbar'>
            <nav className='toolbar-nav'>
                <div className='toolbar-toggle-button'>
                    <DrawerToggleButton click={props.drawerClickHandler}/>
                </div>
                <div className='toolbar-logo'><a href='#0'>CG</a></div>
                <div className='spacer'/>
                <div className='toolbar-nav-items'>
                    <ul>
                        <li><a href='#header'>home</a></li>
                        <li><a href='#projects'>projects</a></li>
                        <li><a href='#0'>resume</a></li>
                        <li><a href='#about'>about</a></li>
                        <li><a href='#contact'>contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default navBar;