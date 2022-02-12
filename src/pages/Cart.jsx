import './Cart.css'
import { Link } from 'react-router-dom'
import img from './sofa.jpg'

const Cart = () => {
    return (
        <div>
            <div className='home-span-container'>
                <h1 className='home-span'> <Link to='/'> Home </Link> <span>/ Cart </span></h1>
            </div>
            <div className='section-container'>

            <section className="section-1">
                <div className='new-img'>
                    <div>
                        <img src={img} alt="" />
                        <h3>Modern Poster</h3>
                    </div>
                </div>

                <div className='font-awesomes'>
                    <i class="fa fa-plus" aria-hidden="true"></i>
                        <p>1</p>
                    <i class="fa fa-minus" aria-hidden="true"></i>
                </div>

                <p className='price'>
                    $500
                </p>

                <i class="fa fa-trash" aria-hidden="true"></i>

            </section>

            

            <section className="section-1">
                <div className='new-img'>
                    <div>
                        <img src={img} alt="" />
                        <h3>Modern Poster</h3>
                    </div>
                </div>

                <div className='font-awesomes'>
                    <i class="fa fa-plus" aria-hidden="true"></i>
                        <p>1</p>
                    <i class="fa fa-minus" aria-hidden="true"></i>
                </div>

                <p className='price'>
                    $500
                </p>

                <i class="fa fa-trash" aria-hidden="true"></i>

            </section>


            <div className='continue-shopping'>
                <div>
                    <button className='contine-shopping'>Continue Shopping</button>
                    <button className='clear-shopping'>Clear Shopping Cart</button>
                </div>
            </div>

            </div>            
        </div>
    )
}

export default Cart
