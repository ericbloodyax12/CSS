import React, {Dispatch, useState} from 'react';
import "./modal.scss"
import {ActionArticleType, articleReducer, changeTextAC, changeTitleAC} from "../state/article-reducer";
import {articlesInfo} from "../data/data";

type ModalPropsType = {
    id: number
    text: string;
    title: string
    img: string;
    dispatch: Dispatch<ActionArticleType>
}

export function Modal(props: ModalPropsType) {
    const [inputValue, setInputValue] = useState(props.text)
    const [titleStatus, setTitleStatus] = useState<"h2" | "input">("h2")
    const [titleText, setTitleText] = useState(props.title)


    return (
        <div id={`myModal${props.id}`} className={"modal"}>
            <div className={"myModal__container"}>
                <span className={"close"}
                      onClick={(e) => {
                          const modal = document.getElementById(`myModal${props.id}`) as HTMLElement;
                          modal.style.display = "none";
                      }}> &times;
                </span>
                <div className={"myModal__content"}>
                    {titleStatus === "h2"
                        ? <h2 onDoubleClick={(e) => setTitleStatus("input")}>{titleText}</h2>
                        : <input type="text" autoFocus onBlur={e => setTitleStatus("h2")} value={titleText} onChange={
                            e => setTitleText(e.currentTarget.value)
                        }/>
                    }
                    <input className={"myModal__input"} type="text" value={inputValue} onChange={(e) => {
                        setInputValue(e.currentTarget.value)
                    }}/>
                    <button className={"myModal__button btn-1"}
                            onClick={(e) => {
                                props.dispatch(changeTextAC({id: props.id, text: inputValue}))
                                props.dispatch(changeTitleAC({id: props.id, title: titleText}))
                            }}>save

                    </button>
                    {/*<img src={props.img}/>*/}
                </div>
            </div>

        </div>
    );
}

