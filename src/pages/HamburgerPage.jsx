import React from 'react'
import { Link } from 'react-router-dom'
import './HamburgerPage.css'
import { useGlobalContext } from '../context'

const HamburgerPage = () => {
    const { isOpen, ToggleIsOpen } = useGlobalContext()
    return (
        isOpen && <div className='hamburgerpage'>
            <header>
            <Link to='/'><img src="https://react-course-comfy-sloth-store.netlify.app/static/media/logo.221f6b13.svg" alt="" /></Link>
            <i class="fas fa-times" onClick={ToggleIsOpen}></i>
            </header>

            <ul class='hamburgerpage-nav'>
                <li><Link exact to='/'>Home</Link></li>
                <li><Link to='/products'>Products</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>

            <div className='hamburgerpage-cart-login'>
                <div className='hamburgerpage-cart'>
                    <h2>Cart</h2><i class="fas fa-shopping-cart"></i> <span className='hamburger-cart-number'>0</span>
                </div>
                <div className='hamburgerpage-login'>
                    <h2>Login</h2><i class="fas fa-user-plus"></i>
                </div>
            </div>

        </div>
    ) 
}

export default HamburgerPage
