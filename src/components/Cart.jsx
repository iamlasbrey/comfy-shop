import React from 'react'
import img from '../pages/sofa.jpg'

const Cart = ({carts}) => {
    console.log(carts)
    return (
            <section className="section-1">
                <div className='new-img'>
                    <div>
                        <img src={carts.image[0]} alt="" />
                        <h3>{carts.title}</h3>
                    </div>
                </div>

                <div className='font-awesomes'>
                    <i class="fa fa-plus" aria-hidden="true"></i>
                        <p>1</p>
                    <i class="fa fa-minus" aria-hidden="true"></i>
                </div>

                <p className='price'>
                    ${carts.price}
                </p>

                <i class="fa fa-trash" aria-hidden="true"></i>

            </section>
    )
}

export default Cart