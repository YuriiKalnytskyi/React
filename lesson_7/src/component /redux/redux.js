import {createStore} from "redux";

const initialState = {
    counter: 0,
    counter2: 0
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INC": {
            return {
                ...state,
                counter: state.counter + 1
            };
        }
        case "INC_100": {
            return {
                ...state,
                counter: state.counter + 100
            };
        }
        case "DEC": {
            return {
                ...state,
                counter: state.counter - 1
            };
        }
        case "DEC_100": {
            return {
                ...state,
                counter: state.counter - 100
            }
        }
        case "RES": {
            return {
                ...state,
                counter: 0
            };
        }
        case "CASTOM": {
            return {
                ...state,
                counter: state.counter + action.payload
            };
        }
        case "CASTOM1": {
            return {
                ...state,
                counter: state.counter - action.payload
            };
        }
        default :
            return state
    }
    ;
}
const store = createStore(reducer)


export default store
