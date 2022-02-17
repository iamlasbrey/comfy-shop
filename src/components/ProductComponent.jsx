import React from 'react'
import './productcomponent.css'
import { Link } from 'react-router-dom'

const ProductComponent = ({items}) => {

    return (
        <div>
            <Link to={`/furniture/${items._id}`}>
                <div className='product'>
                    <div> <img src={items.image[0]} alt="" onError={(e)=>{e.target.onerror = null; e.target.src='https://images.pexels.com/photos/6438762/pexels-photo-6438762.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6438762.jpg&fm=jpg' }}/></div>
                        <div className='product-details'>
                            <div className='price-product-details'>
                                <h2>{items.title}</h2>
                                <p>${items.price}</p>
                            </div>
                        <p className='description'> {items.description} </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductComponent