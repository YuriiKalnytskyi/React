import {
    SET_PRODUCTS,
    SET_PRODUCTS_LOADING,
    RESET_PRODUCTS_LOADING ,
    ADD_TO_WISHLIST,
    REMUVE_FROM_WISHLIST ,
    ADD_TO_CART,
    REMUVE_FROM_CART
} from "../actionTypes"

const initialState = {
    products: [],
    wishList: [],
    cart: [],
    isProductsLoading: false,
}

export const productsRuducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS: {
            return {
                ...state,
                products: action.payload
            }
        }
        case SET_PRODUCTS_LOADING: {
            return {
                ...state,
                isProductsLoading: true
            }
        }
        case RESET_PRODUCTS_LOADING: {
            return {
                ...state,
                isProductsLoading: false
            }
        }

        case ADD_TO_WISHLIST : {
            const {payload}=action
            const arlreadyExists = state.wishList.find(({id})=>id ===payload)
            if (arlreadyExists){
                return state
            }

            const itemProducts = state.products.find(el=>el.id===payload)
            return {
                ...state,
                wishList: [...state.wishList , itemProducts]
            }
        }

        case REMUVE_FROM_WISHLIST : {
            const {payload}=action
            const isMissing = !state.wishList.find(({id})=>id===payload)
            if (isMissing){
                return state
            }
            return {
                ...state,
                wishList: [...state.wishList.filter(el=> el.id !==payload )]
            }
        }


        case ADD_TO_CART : {
            return {
                ...state,
                cart: []
            }

        }
        case REMUVE_FROM_CART : {
            return {
                ...state,
                cartt: []
            }

        }

        default:
            return state

    }

}

