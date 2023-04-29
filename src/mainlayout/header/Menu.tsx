import React, {Dispatch, memo, SetStateAction} from 'react';
import './menu.scss';

type MenuPropsType = {
    count:number
   inc:(count:number)=> void
}

function Menu(props: MenuPropsType) {
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
    console.log("rerender Menu")
    return (
            <header className={'header'}>
                <ul className='menu-container'>
                    <div> {props.count} </div> <button onClick={(e)=> props.inc(props.count)}>+</button> {itemsJSX}
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

export const MemoizedMenu = memo(Menu) ;