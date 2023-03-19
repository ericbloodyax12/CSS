import React from 'react';
import './menu.css';

function Menu(props:any) {
const menuItemsTxt = ["home","my friends","my messages","my activity","photos"]
    const itemsJSX = menuItemsTxt.map((el,index) => {
        let lastElIcon =  (menuItemsTxt.length-1 === index) ? <i className="fa fa-camera" aria-hidden="true"></i> : false
        return <li key={index} id={`item-${index}`} className={"item"}>
            {lastElIcon} {el}
        </li>
    })
    return (
        <>
            <header className={'header'} id={"h1"}>
                <ul className='menu-container'>
                    {itemsJSX}
                </ul>
                {/*<ul className='container2'>*/}
                {/*    <li className={'item2'} id={"home"}>home</li>*/}
                {/*    <li className={'item2'}>my friends</li>*/}
                {/*    <li className={'item2'}>my messages</li>*/}
                {/*    <li className={'item2'}>my activity</li>*/}
                {/*    <li className={'item2'}>photos</li>*/}
                {/*</ul>*/}
                <div className="invisible">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <div className="mobile-menu"></div>
                    <div className="mobile-menu"></div>
                    <div className="mobile-menu"></div>
                </div>
            </header>
        </>
    );
}

export default Menu;