import './Header.css'
import React from 'react'
import {Link} from 'react-router-dom'
import { useGlobalContext } from '../context'

const Header=()=>{
    const { ToggleIsOpen } = useGlobalContext()
    return (
        <div className='header'>
                <Link to='/'> <img src="https://react-course-comfy-sloth-store.netlify.app/static/media/logo.221f6b13.svg" alt="" /> </Link>
                
                <ul className='navigation'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                    <Link to='/about'>About</Link>
                    </li>
                    <li>
                    <Link to='/products'>Products</Link>
                    </li>
                </ul>

            <div className='cart-login'>
                <Link to='/mycart'>
                <div className='cart'>
                    <h2>Cart</h2><i class="fas fa-shopping-cart"></i> <span className='cart-number'>0</span>
                </div>
                </Link>
                <div className='login'>
                    <h2>Login</h2><i class="fas fa-user-plus"></i>
                </div>
            </div>
            <i class="fas fa-bars" onClick={ToggleIsOpen}></i>
        </div>
    ); 
}

export default Header;
