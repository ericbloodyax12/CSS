import React, {Dispatch, memo, SetStateAction, useReducer} from 'react';
import 'react-reflex/styles.css';
import './content.scss';
import {Article} from "../../Components/article/Article";
import {articleReducer, articlesInfoType} from "../../state/article-reducer";

type PropsType = {
    randomChange:boolean;
    setRandomChange: Dispatch<SetStateAction<boolean>>
    articlesInfo:articlesInfoType
}

function Content(props: PropsType) {
    console.log("rendering content")
    const [articles, dispatch] = useReducer(articleReducer, props.articlesInfo);
    let random_boolean = () => Math.random() < 0.5;
    const asCode = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/2048px-BMW_logo_%28gray%29.svg.png"
    const erCode = "  https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_the_Romani_people.svg/375px-Flag_of_the_Romani_people.svg.png"
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
                random png <button className={"articles-blocks__button btn-1"} onClick={(e)=> props.setRandomChange(random_boolean())}>+</button>
               <img src={props.randomChange ? asCode : erCode}/>
                {articlesJSX}
            </div>
        </div>
    );
}

export const MemoizedContent = memo(Content)