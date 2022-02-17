import React from 'react'
import './ProductPage.css'
import { Link } from 'react-router-dom'
import ProductComponentlist from '../components/ProductComponentlist'
import { useGlobalContext } from '../context'

const ProductPage = () => {
    const {searchFurniture, 
            loading,
            resetButton, 
            SelectAll,
            SelectOffice,
            SelectLiving,
            SelectKitchen,
            SelectBedroom,
            SelectDinning,
            SelectKids
            } = useGlobalContext()
    
    return (
        <div className='product-page'>
            <div className='product-page-header'><h1> <Link to='/'>Home </Link><span>/ Products</span></h1></div>
            <div className='product-overall'>
                <div className='select-filter'>
                    <input className='input-filter'
                    placeholder='Search'
                    type='text'
                    onChange={(e)=>searchFurniture(e.target.value)}
                    />
                    <div>
                        <h3>Category</h3>
                        <ul className='btn-filter-select-container'>
                            <li> <button className='btn-filter-select' onClick={SelectAll}>All</button></li>
                            <li><button className='btn-filter-select' onClick={SelectOffice}>Office</button></li>
                            <li><button className='btn-filter-select' onClick={SelectLiving}>Living Room</button></li>
                            <li><button className='btn-filter-select' onClick={SelectKitchen}>Kitchen</button></li>
                            <li><button className='btn-filter-select' onClick={SelectBedroom}>Bedroom</button></li>
                            <li><button className='btn-filter-select' onClick={SelectDinning}>Dinning</button></li>
                            <li><button className='btn-filter-select' onClick={SelectKids}>Kids</button></li> 
                        </ul>
                    </div>
                    <button className='reset-button' onClick={resetButton}> Clear Filters </button>
                </div>

                <div className= {loading ? 'product-container-loading' : 'product-container'}>
                    <ProductComponentlist />
                </div>
            </div>
        </div>
    )
}

export default ProductPage
