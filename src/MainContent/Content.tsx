import React from 'react';
import './content.css'
type PropsType = {

}

function Content(props: PropsType) {

    return (
        <div className={'content-container'}>
        OutLine
            <div className={'height-width-test1'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere minima quis recusandae reprehenderit unde. Accusamus alias aliquam deleniti, ea eveniet hic in inventore iste, iure libero minima non praesentium temporibus?</div>
            <div className={'height-width-test2'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
        </div>
    );
}

export default Content;