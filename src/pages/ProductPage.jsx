import React from 'react'
import img from './sofa.jpg'
import './ProductPage.css'
import { Link } from 'react-router-dom'

const ProductPage = () => {
    return (
        <div className='product-page'>
            <div className='product-page-header'><h1> <Link to='/'>Home </Link><span>/ Products</span></h1></div>
            <div className='product-overall'>
                <div className='select-filter'>
                    <input className='input-filter'placeholder='Search'/>
                    <div>
                        <h3>Category</h3>
                        <ul className='btn-filter-select-container'>
                            <li> <button className='btn-filter-select'>All</button></li>
                            <li><button className='btn-filter-select'>Office</button></li>
                            <li><button className='btn-filter-select'>Living Room</button></li>
                            <li><button className='btn-filter-select'>Kitchen</button></li>
                            <li><button className='btn-filter-select'>Bedroom</button></li>
                            <li><button className='btn-filter-select'>Dinning</button></li>
                            <li><button className='btn-filter-select'>Kids</button></li> 
                        </ul>
                    </div>
                    <button className='reset-button'> Clear Filters </button>
                </div>

                <div className='product-container'>

                    <Link to='/furniture/:id'>
                    <div className='product'>
                        <div> <img src={img} alt="" /></div>
                        <div className='product-details'>
                            <div className='price-product-details'>
                                <h2>Modern Poster</h2>
                                <p>$30.99</p>
                            </div>
                            <p className='description'>Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic</p>
                        </div>
                    </div>
                </Link>

                <Link to='/furniture/:id'>
                    <div className='product'>
                        <div> <img src={img} alt="" /></div>
                        <div className='product-details'>
                            <div className='price-product-details'>
                                <h2>Modern Poster</h2>
                                <p>$30.99</p>
                            </div>
                            <p className='description'>Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic</p>
                        </div>
                    </div>
                </Link>

                <Link to='/furniture/:id'>
                    <div className='product'>
                        <div> <img src={img} alt="" /></div>
                        <div className='product-details'>
                            <div className='price-product-details'>
                                <h2>Modern Poster</h2>
                                <p>$30.99</p>
                            </div>
                            <p className='description'>Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic</p>
                        </div>
                    </div>
                </Link>

                <Link to='/furniture/:id'>
                    <div className='product'>
                        <div> <img src={img} alt="" /></div>
                        <div className='product-details'>
                            <div className='price-product-details'>
                                <h2>Modern Poster</h2>
                                <p>$30.99</p>
                            </div>
                            <p className='description'>Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic</p>
                        </div>
                    </div>
                </Link>

                <Link to='/furniture/:id'>
                    <div className='product'>
                        <div> <img src={img} alt="" /></div>
                        <div className='product-details'>
                            <div className='price-product-details'>
                                <h2>Modern Poster</h2>
                                <p>$30.99</p>
                            </div>
                            <p className='description'>Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic</p>
                        </div>
                    </div>
                </Link>

                <Link to='/furniture/:id'>
                    <div className='product'>
                        <div> <img src={img} alt="" /></div>
                        <div className='product-details'>
                            <div className='price-product-details'>
                                <h2>Modern Poster</h2>
                                <p>$30.99</p>
                            </div>
                            <p className='description'>Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic</p>
                        </div>
                    </div>
                </Link>

                <Link to='/furniture/:id'>
                    <div className='product'>
                        <div> <img src={img} alt="" /></div>
                        <div className='product-details'>
                            <div className='price-product-details'>
                                <h2>Modern Poster</h2>
                                <p>$30.99</p>
                            </div>
                            <p className='description'>Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic</p>
                        </div>
                    </div>
                </Link>

                <Link to='/furniture/:id'>
                    <div className='product'>
                        <div> <img src={img} alt="" /></div>
                        <div className='product-details'>
                            <div className='price-product-details'>
                                <h2>Modern Poster</h2>
                                <p>$30.99</p>
                            </div>
                            <p className='description'>Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic</p>
                        </div>
                    </div>
                </Link>

                <Link to='/furniture/:id'>
                    <div className='product'>
                        <div> <img src={img} alt="" /></div>
                        <div className='product-details'>
                            <div className='price-product-details'>
                                <h2>Modern Poster</h2>
                                <p>$30.99</p>
                            </div>
                            <p className='description'>Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic</p>
                        </div>
                    </div>
                </Link>

                    
                    
                    
                </div>
            </div>
        </div>
    )
}

export default ProductPage
