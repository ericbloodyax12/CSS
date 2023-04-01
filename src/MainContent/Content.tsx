import React from 'react';
import {ReflexContainer, ReflexElement, ReflexSplitter} from "react-reflex";
import 'react-reflex/styles.css';
import './content.scss';
import {Article} from "./article/Article";

type PropsType = {

}

function Content(props: PropsType) {

    return (
        <div className={'content-container'}>
            <Article isWarning={false} />
            <Article isWarning={false} />
            <Article isWarning={true} />
        </div>
    );
}

export default Content;