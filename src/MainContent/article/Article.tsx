import React from 'react';
import "./article.scss";


type ArticlePropsType = {
    title?: string
    isWarning: boolean
}

export function Article(props:ArticlePropsType) {
    let articleTitleClassName = props.isWarning
        ? "article__title warning"
        : "article__title";

    return (
        <div className={"article"}>
            <div className={articleTitleClassName}>
                <h2>Text Formatting</h2>
            </div>
            <div className={"article__text"}>
                <p >
                    This text is styled with some of the text formatting
                    properties. The heading uses the text-align,
                    text-transform, and color properties.
                    The paragraph is indented, aligned, and the space between
                    characters is specified. The underline is removed from
                    this colored "Try it Yourself" link
                </p>
            </div>
        </div>
    );
}
