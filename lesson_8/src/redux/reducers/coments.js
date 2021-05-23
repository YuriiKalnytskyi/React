import {RESET_COMMENTS_IS_LOADING,
    SET_COMMENTS,
    SET_COMMENTS_ERROR,
    SET_COMMENTS_IS_LOADING,SET_POST_ID} from "../actionTypes/index"

const initialState = {
    comment: [], isLoading: false, error: null,comments_id:{}
}
export const comments = (state = initialState , action)=>{
    switch (action.type){
        case SET_COMMENTS :{
            return{
                ...state,comment:action.payload,
                isLoading:true
            }
        }
        case SET_COMMENTS_IS_LOADING: {
            return {
                ...state, isLoading: true
            }
        }
        case RESET_COMMENTS_IS_LOADING: {
            return {
                ...state, isLoading: false
            }
        }
        case SET_COMMENTS_ERROR: {
            return {
                ...state, error: action.payload
            }
        }
        case SET_POST_ID:{
            return {
                ...state,comments_id: action.payload
            }
        }
        default:
            return state
    }


}