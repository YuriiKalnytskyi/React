import {SET_PRODUCTS ,SET_PRODUCTS_LOADING,RESET_PRODUCTS_LOADING ,ADD_TO_WISHLIST,
    REMUVE_FROM_WISHLIST ,
    ADD_TO_CART,
    REMUVE_FROM_CART} from "../actionTypes"


 export const fetchProducts = (sortOption)=>async (dispatch) => {
    try {
        dispatch(setProductsLoading());
        const resp = await fetch('https://fakestoreapi.com/products');
        const data = await resp.json()
        data.sort((a,b)=>{
            if (sortOption.order ==='ASC'){
                return a[sortOption.field ]- b[sortOption.field ]
            }
            return b[sortOption.field ]- a[sortOption.field ]

        })
        console.log(data)
        dispatch(setProducts(data));
    } catch (e) {
        console.log(e)
    }
    finally {
        dispatch(resetProductsLoading());
    }
}



export const setProductsLoading= ()=>({type:SET_PRODUCTS_LOADING})
export const setProducts = (payload)=>({type:SET_PRODUCTS  ,payload})
export const resetProductsLoading= ()=>({type:RESET_PRODUCTS_LOADING})


export const addToWishlist = (payload)=>({type:ADD_TO_WISHLIST})
export const  removeFromWishlist= (payload)=>({type:  REMUVE_FROM_WISHLIST})
export const addPoCart= ()=>({type:ADD_TO_CART})
export const removeFromCart= ()=>({type:REMUVE_FROM_CART})