import React from 'react';
import './menu.css';

function Menu(props:any) {

    return (
            <header className={'header'} id={"h1"}>
                <ul className='container'>
                    <li className={'item'}>home</li>
                    <li className={'item'}>my friends</li>
                    <li className={'item'}>my messages</li>
                    <li className={'item'}>my activity</li>
                    <li className={'item'}>photos</li>
                </ul>
                <div className="invisible">
                    <div className="mobile-menu"></div>
                    <div className="mobile-menu"></div>
                    <div className="mobile-menu"></div>
                </div>
            </header>
    );
}

export default Menu;