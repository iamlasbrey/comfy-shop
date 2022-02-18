import './cartpage.css'
import { Link } from 'react-router-dom'
import Cartlist from '../components/Cartlist'

const Cart = () => {
    return (
        <div>
            <div className='home-span-container'>
                <h1 className='home-span'> <Link to='/'> Home </Link> <span>/ Cart </span></h1>
            </div>
            <div className='section-container'>
                <Cartlist />
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
