import React from 'react';
import {ReflexContainer, ReflexElement, ReflexSplitter} from "react-reflex";
import 'react-reflex/styles.css';
import './content.scss';
import {Article} from "./article/Article";
import {articlesInfo} from "../data/data"

type PropsType = {}


function Content(props: PropsType) {
    const articlesJSX = articlesInfo.map((el) => {
        return <Article key={el.id} title={el.title} id={el.id} isWarning={el.isWarning} buttonText={el.buttonText}
                        text={el.text} img={el.img}/>
    })
    return (

        <div className={'content-container'}>
            <div className={"articles-blocks"}>
                {articlesJSX}
            </div>
        </div>
    );
}

export default Content;