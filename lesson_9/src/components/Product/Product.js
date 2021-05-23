import {useEffect} from "react";
import React from "react";
import {fetchProducts ,addToWishlist ,removeFromWishlist} from "../../redux";
import {useDispatch, useSelector} from "react-redux";

export default function Product() {
    const {products , isProductsLoading}=useSelector(({products})=>products)
    const dispatch =useDispatch()


    // const fetchProducts = async () => {
    //     try {
    //         dispatch(setProductsLoading())
    //         const resp = await fetch('https://fakestoreapi.com/products');
    //         const data = await resp.json()
    //         console.log(data)
    //         dispatch(setProducts(data))
    //     } catch (e) {
    //         console.log(e)
    //     }
    //     finally {
    //         dispatch(resetProductsLoading())
    //     }
    // }


    useEffect(() => {
        dispatch(fetchProducts({
            field:'price',
            order:'ASC'
        }))
        console.log(products)
    },[])

    if(isProductsLoading){
        return <div>LOADING</div>
    }

    return (
        <div>

            {
                products.map(products=>(
                    <div key={products.id} style={{
                        width:'70%',
                        margin:'20px auto'
                    }}>
                        <button onClick={()=>{
                            dispatch(addToWishlist(products.id))
                        }}> add To Wishlist </button>
                        <h4>{products.title}</h4>
                        <p>{products.description}</p>
                        <img style={{
                            width:'100%'
                        }} src={products.image} alt={'test'}/>
                    </div>
                ))
            }

        </div>
    )
}