import React from 'react';
import "./modal.scss"

type ModalPropsType = {
    id: number
    text: string;
    img: string;
}

export function Modal(props: ModalPropsType) {
    return (
        <div id={`myModal${props.id}`} className={"modal"}>
            <div className={"modal-content"}>
                <span className={"close"}
                      onClick={(e) => {
                          const modal = document.getElementById(`myModal${props.id}`) as HTMLElement;
                          modal.style.display = "none";
                      }}> &times;
                </span>
                <p>
                    {props.text}
                    <img src={props.img}/>
                </p>
            </div>

        </div>
    );
}

