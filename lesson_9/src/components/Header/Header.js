import {useSelector} from "react-redux";

export default function Header() {
    const {wishList} = useSelector(({products})=>products)
    return (
        <div>
            <header style={{
                display : "flex",
                justifyContent : "space-between" ,
                alignItems:"center"
            }}>
               <h3>shop</h3>
                <div style={{
                    display : "flex",
                    justifyContent : "space-between" ,
                    alignItems:"center"}}>
                    <h3 style={{marginRight:'20px'}}> cart </h3>
                    <h3> wishlist {wishList.length}</h3>
                </div>
            </header>
            <hr/>
        </div>
    )
}