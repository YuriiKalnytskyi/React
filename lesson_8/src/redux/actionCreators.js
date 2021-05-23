import {
    RESET_COMMENTS_IS_LOADING,
    SET_COMMENTS,
    SET_COMMENTS_ERROR,
    SET_COMMENTS_IS_LOADING,
    RESET_IS_LOADING,
    SET_ERROR,
    SET_IS_LOADING,
    SET_POST,
    SET_POST_ID
} from "./actionTypes/index";

export const setIsLoading=()=>({type:SET_IS_LOADING})
export const resetIsLoading=()=>({type:RESET_IS_LOADING})
export const setError=(payload)=>({type:SET_ERROR,payload})
export const setPost=(data)=>({type:SET_POST,payload:data})

export const setCommentIsLoading=()=>({type:SET_COMMENTS_IS_LOADING})
export const resetCommentIsLoading=()=>({type:RESET_COMMENTS_IS_LOADING})
export const setCommentError=(payload)=>({type:SET_COMMENTS_ERROR,payload})
export const setComment=(data)=>({type:SET_COMMENTS,payload:data})
export const setCommentId=(data)=>({type:SET_POST_ID,payload:data})