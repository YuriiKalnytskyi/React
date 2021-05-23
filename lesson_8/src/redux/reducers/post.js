
import {RESET_IS_LOADING, SET_ERROR, SET_IS_LOADING, SET_POST} from "../actionTypes/index";

const initialState={
    post:[], isLoading:false,error:null
}

export const post =(state=initialState,action)=>{

    switch (action.type){
        case SET_POST:{
            return{
                ...state,post: action.payload,
                isLoading: false
            }
        }
        case SET_IS_LOADING:{
            return {
                ...state,isLoading: true
            }
        }
        case RESET_IS_LOADING:{
            return {
                ...state,isLoading: false
            }
        }
        case SET_ERROR:{
            return {
                ...state,error: action.payload
            }
        }
        default:
            return state
    }


}