import React from 'react'
import './SingleProductPage.css'
import { Link } from 'react-router-dom'
import img from './sofa.jpg'

const SingleProductPage = () => {
    return (
        <div className='singlepage'>
            <div className='singlepagecontent'>
                <h1><Link to='/'>Home /</Link> <Link to='/'>Products</Link> / Modern Poster </h1>
            </div>

            <div className='single-page-section-two'>    
            <button className='btn-back-products'><Link to='/products'>BACK TO PRODUCTS</Link></button>

            <div className='single-page-section-two-bottom'>

                <div className='single-page-section-two-bottom-top'>
                    <div className='single-product-img'><img src={img} alt="" /></div>
                <div className='picture-options-folder'>
                        <div className='picture-option'><img src={img} alt="" /></div>
                        <div className='picture-option'><img src={img} alt="" /></div>
                        <div className='picture-option'><img src={img} alt="" /></div>
                        <div className='picture-option'><img src={img} alt="" /></div>
                        <div className='picture-option'><img src={img} alt="" /></div>
                    </div>
                </div>


                <div className='single-page-section-two-bottom-top-two'>
                <h1>Modern Poster</h1>
                <p className='price'>$30.99</p>
                <p className='description'>
                Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge
                </p>

                <p className='available'>Available : <span>In Stock</span></p>
                <p className='sku'>SKU : <span>RecQ0fMd8T0Vk211E</span></p>
                <p className='brand'>Brand : <span>Liddy</span></p>

                <hr />

                <div className='addition-reduction'>
                <i class="fas fa-minus"></i>
                <p>1</p>
                <i class="fas fa-plus"></i>
                </div>

                <button className='add-to-cart'>Add To Cart</button>
                </div>


            </div>



            </div>
        </div>
    )
}

export default SingleProductPage
