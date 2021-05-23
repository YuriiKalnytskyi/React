import {post} from "./post";
import {comments} from "./coments";

import {combineReducers} from "redux";
export const rootReducer=combineReducers({
    post:post,
    comments:comments
})