import React from 'react'
import { useGlobalContext } from '../context'
    

const Cart = ({carts}) => {
    const { increase,remove, decrease } = useGlobalContext()

    return (
            <section className="section-1">
                <div className='new-img'>
                    <div>
                        <img src={carts.image[0]} alt="" />
                        <h3>{carts.title}</h3>
                    </div>
                </div>

                <div className='font-awesomes'>
                    <i class="fa fa-plus" aria-hidden="true" onClick={()=>increase(carts)}></i>
                        <p>{carts.amount}</p>
                    <i class="fa fa-minus" aria-hidden="true" onClick={()=>decrease(console.info('minus'))}></i>
                </div>

                <p className='price'>
                    ${carts.price}
                </p>

                <i class="fa fa-trash" aria-hidden="true" onClick={()=>remove(console.info('remove'))}></i>

            </section>
    )
}

export default Cart