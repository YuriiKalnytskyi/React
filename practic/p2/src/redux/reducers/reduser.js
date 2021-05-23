import {createStore} from "redux";
import {CASTOM, DELETE} from '../actionTypes'

const initialState = {
    list: []
};
const reducer = (state = initialState, action) => {
    switch (action.type) {

        case CASTOM: {
            return {list: [...state.list, action.payload]}
        }
        case DELETE: {
            const filter = state.list.filter((value, index) => index !== action.payload)
            return {
                ...state,
                list: filter
            }
        }

        default :
            return state

    }

}
const store = createStore(reducer)

export default store
