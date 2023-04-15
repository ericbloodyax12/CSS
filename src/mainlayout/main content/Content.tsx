import React, {useReducer} from 'react';
import {ReflexContainer, ReflexElement, ReflexSplitter} from "react-reflex";
import 'react-reflex/styles.css';
import './content.scss';
import {Article} from "../../Components/article/Article";
import {articlesInfo} from "../../data/data";
import {articleReducer} from "../../state/article-reducer";

type PropsType = {

}
function Content(props: PropsType) {

    const [articles, dispatch] = useReducer(articleReducer, articlesInfo);


    const articlesJSX = articles.map((el) => {
        return <Article key={el.id}
                        title={el.title}
                        id={el.id}
                        isWarning={el.isWarning}
                        buttonText={el.buttonText}
                        text={el.text}
                        img={el.img}
                        dispatch={dispatch}
        />
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