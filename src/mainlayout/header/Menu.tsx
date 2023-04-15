import React from 'react';
import './menu.scss';

function Menu(props: any) {
    const menuItemsTxt = ["home", "my friends", "my messages", "my activity", "photos"]
    const itemsJSX = menuItemsTxt.map((el, index) => {
        let lastElIcon = (menuItemsTxt.length - 1 === index) ?
            <i className="fa fa-camera" aria-hidden="true"></i> : false
        return <li
            key={index}
            className={"item"}

        >
            {lastElIcon} {el}
        </li>
    })
    return (
            <header className={'header'}>
                <ul className='menu-container'>
                    {itemsJSX}
                </ul>

                <div className="invisible">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <div className="mobile-menu"></div>
                    <div className="mobile-menu"></div>
                    <div className="mobile-menu"></div>
                </div>
            </header>
    );
}

export default Menu;