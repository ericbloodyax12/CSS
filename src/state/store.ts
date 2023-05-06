import {createStore} from "redux";
import {articleReducer} from "./article-reducer";

export type CreateStoreType = ReturnType<typeof articleReducer>

export const store = createStore(articleReducer);