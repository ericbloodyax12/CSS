import React, {memo} from 'react';

enum CardinalDirections {
    input = "input",
    button = "button"

}
type ConditionalUITestPropsTypes = {
condition: CardinalDirections | string
};



export const MemoizedConditionalUITest = memo(function (props: ConditionalUITestPropsTypes) {
    console.log("props.condition",props.condition)
    switch (props.condition) {
        case CardinalDirections.input: {
            return <input type={"text"}/>
        }
        case CardinalDirections.button: {
            return <button>button</button>
        }
        default: return <></>
    }
})

