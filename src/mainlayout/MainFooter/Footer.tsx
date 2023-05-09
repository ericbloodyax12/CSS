import React, {useState} from 'react';
import './footer.css';
import {MemoizedConditionalUITest} from "./conditional-ui-test/ConditionalUITest";
type FooterPropsType = {

}

function Footer(props: FooterPropsType) {
    const [stateCondition, setStateCondition] = useState("default")
    const [onClickState, setOnClickState] = useState("")
    const onclickHandler = (e:any) => {
        setOnClickState(stateCondition)
    };

    return (
        <div className={'footer-container'}>
        <input type={"text"} value={stateCondition} onChange={(e) => {
            setStateCondition(e.currentTarget.value)
        }}/>
            <MemoizedConditionalUITest condition={onClickState}/>
            <button onClick={onclickHandler}>+</button>
        </div>
    );
}

export default Footer;