import React from 'react';
import {ReflexContainer, ReflexElement, ReflexSplitter} from "react-reflex";
import 'react-reflex/styles.css';
import './content.css';

type PropsType = {

}

function Content(props: PropsType) {

    return (
        <div className={'content-container'}>
            <ReflexContainer orientation="vertical">

                <ReflexElement className="left-pane">
                    <div className="pane-content">
                        Left Pane (resizeable)
                    </div>
                </ReflexElement>

                <ReflexSplitter/>

                <ReflexElement className="right-pane">
                    <div className="pane-content">
                        Right Pane (resizeable)
                    </div>
                </ReflexElement>

            </ReflexContainer>
        </div>
    );
}

export default Content;