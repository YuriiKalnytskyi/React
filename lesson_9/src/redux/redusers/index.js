import {combineReducers} from "redux";
import {productsRuducers} from "./productsRuducers";


export const rootReducer = combineReducers({
    products :productsRuducers
})