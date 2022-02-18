import React,{useEffect, useState} from 'react'
import './SingleProductPage.css'
import { Link,useParams } from 'react-router-dom'
import { useGlobalContext } from '../context'

const SingleProductPage = () => {
    const id = useParams().id
    const [loading, isLoading] = useState(true)
    const [SingleProduct, setSingleProduct] = useState(null)
    const url = `https://comfy-sloth-api.herokuapp.com/api/products/search/${id}`
    const {addTocart } = useGlobalContext()
    
    const GetSingleProduct=async()=>{
        isLoading(true)
        try {
            const response = await fetch(url)
            const status = await response.json()
            if(status){
                setSingleProduct(status)
                isLoading(false)
            }else{
                setSingleProduct(null)
            }
        } catch (error) {
            console.log(error)
            isLoading(false)
        }
    }

    useEffect(()=>{
        GetSingleProduct()
    },[id])


        if(loading){
            return 'loading'
        }

        if(!SingleProduct){
            return  <h1> No Furniture to display </h1>
        }

    return (
        <div className='singlepage'>
            <div className='singlepagecontent'>
                <h1><Link to='/'>Home /</Link> <Link to='/products'>Products</Link> / {SingleProduct.title} </h1>
            </div>

            <div className='single-page-section-two'>    
            <button className='btn-back-products'><Link to='/products'>BACK TO PRODUCTS</Link></button>

            <div className='single-page-section-two-bottom'>

        <div className='single-page-section-two-bottom-top'>
            <div className='single-product-img'>  <img src={SingleProduct.image[0]} alt="" onError={(e)=>{e.target.onerror = null; e.target.src='https://images.pexels.com/photos/6438762/pexels-photo-6438762.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6438762.jpg&fm=jpg' }}/></div>
                <div className='picture-options-folder'>
                    {
                        SingleProduct.image.map((items, index)=>(
                            <div className='picture-option' key={index}>
                            <img src={items} alt="" onError={(e)=>{e.target.onerror = null; e.target.src='https://images.pexels.com/photos/6438762/pexels-photo-6438762.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6438762.jpg&fm=jpg' }}/>
                            </div>
                        ))
                    }
                    </div>
                </div>


                <div className='single-page-section-two-bottom-top-two'>
                <h1> {SingleProduct.title} </h1>
                <p className='price'>${SingleProduct.price} </p>
                <p className='description'>
                {SingleProduct.description}
                </p>

                <p className='available'>Available : <span>{SingleProduct.available ? 'In Stock': 'Out Of Stock'}</span></p>
                <p className='sku'>SKU : <span>{SingleProduct._id}</span></p>
                <p className='brand'>Brand : <span>{SingleProduct.company}</span></p>

                <hr />

                <div className='addition-reduction'>
                <i class="fas fa-minus"></i>
                <p>1</p>
                <i class="fas fa-plus"></i>
                </div>

                <button className='add-to-cart' onClick={()=>addTocart(SingleProduct._id)}>Add To Cart</button>
                </div>


            </div>



            </div>
        </div>
    )
}

export default SingleProductPage
