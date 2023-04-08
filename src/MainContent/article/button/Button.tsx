import React from 'react';
import "./button.scss"

type ButtonPropsType = {
   id:number;
   buttonText:string;
   title: string
}
export function Button(props:ButtonPropsType) {

    return (
            <button className={"article__button btn-1"}

                    onMouseEnter={(e) => {
                        const target = e.target as HTMLInputElement;
                        console.log(target.offsetWidth,target.scrollWidth)
                        if (target.offsetWidth < target.scrollWidth) {
                        target.title = props.title
                        }
                    }}
                    onClick={() => {
                        const modal = document.getElementById(`myModal${props.id}`) as HTMLElement;
                        console.log(props.id)
                        modal.style.display = "block"
                    }}>
                    {`Learn more about: ${props.title}`}
            </button>
    );
}

