import React from 'react'
import Cart from './Cart'
import { useGlobalContext } from '../context'
    
const Cartlist = () => {
    const { productcart } = useGlobalContext()

        if(productcart.length < 1){
            return <h1>Your Cart is Empty</h1>
        }
    return (
        <div>
            {
                productcart.map((carts, index)=>(
                    <Cart carts={carts} index={index}/>
                ))
            }
        </div>
    )
}

export default Cartlist