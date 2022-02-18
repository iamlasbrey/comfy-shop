import React from 'react'
import Cart from './Cart'
import { useGlobalContext } from '../context'
    
const Cartlist = () => {
    const { productCart } = useGlobalContext()

        if(!productCart){
            <h1>'Your Cart is Empty'</h1>
        }
    return (
        <div>
            {
                productCart.map((carts, index)=>(
                    <Cart carts={carts} index={index}/>
                ))
            }
        </div>
    )
}

export default Cartlist