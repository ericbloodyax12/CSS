import React, {Dispatch} from 'react';
import "./article.scss";
import {log} from "util";

import {Modal} from "../../Components/Modal";
import {Button} from "../button/Button";
import {ActionArticleType} from "../../state/article-reducer";

export type ArticlePropsType = {
    isWarning: boolean
    id: number
    buttonText: string
    text: string
    title: string
    img: string
    dispatch: Dispatch<ActionArticleType>
}

export function Article(props: ArticlePropsType) {
    let articleTitleClassName = props.isWarning
        ? "article__title warning"
        : "article__title";

    return (

        <div className={"article"}>
            <div className={"article-content"}>
                <div className={articleTitleClassName}>
                    <h2>{props.title}</h2>
                </div>
                <p>
                    {props.text}
                </p>
            </div>
            <div className={"article__actions"}>
                <Button id={props.id} buttonText={props.buttonText} title={props.title}/>
            </div>
            <Modal id={props.id}
                   text={props.text}
                   img={props.img}
                   dispatch={props.dispatch}
                   title={props.title}
            />
        </div>

    );
}
