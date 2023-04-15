import {articlesInfo} from "../data/data";

type articlesInfoType = typeof articlesInfo;

const CHANGE_TITLE = "CHANGE_TITLE";
const CHANGE_TEXT = "CHANGE_TEXT";

type changeTitleActionType = ReturnType<typeof changeTitleAC>;
type changeTextActionType = ReturnType<typeof changeTextAC>;
type ActionArticleType = changeTitleActionType | changeTextActionType;
export const articleReducer = (state: articlesInfoType, action: ActionArticleType): articlesInfoType => {
    switch (action.type) {
        case CHANGE_TITLE: {
            return state.map(a => a.id === action.payload.id ? {...a, title: action.payload.title} : a)
        }
        case CHANGE_TEXT: {
            return state.map(a => a.id === action.payload.id ? {...a, text: action.payload.text} : a)
        }
        default:
            throw Error("error")
    }
}

export const changeTitleAC = (payload: { id: number, title: string }) => {
    return {type: CHANGE_TITLE, payload} as const;

}
export const changeTextAC = (payload: { id: number, text: string }) => {
    return {type: CHANGE_TEXT, payload} as const;
}

