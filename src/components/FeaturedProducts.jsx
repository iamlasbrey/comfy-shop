import React from 'react'
import './featuresproducts.css'
import { Link } from 'react-router-dom'


const FeaturedProducts = ({items}) => {
    return (
        <div className='featuredproducts'>
            <Link to={`/furniture/${items._id}`}>
                <div className='featured-products'>
                    <img src={items.image[0]} alt="" onError={(e)=>{e.target.onerror = null; e.target.src='https://images.pexels.com/photos/6438762/pexels-photo-6438762.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6438762.jpg&fm=jpg' }}/>
                        <div class='titleandprice'>
                            <p class='title'> {items.title} </p>
                        <p class='price'>${items.price}</p>
                    </div>
                </div>
            </Link>
        </div>
        )
}

export default FeaturedProducts