import React from 'react';
import './menu.css';

function Menu(props:any) {

    return (
        <div>
            <header className='nav-panel' id={"h1"}>
                <a href="#">home</a>
                <a href="#">my friends</a>
                <a href="#">my messages</a>
                <a href="#">my activity</a>
                <a href="#">photos</a>
            </header>
        </div>
    );
}

export default Menu;