import '../styles/header.scss'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartItemContext } from '../context/CartData'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
//icons
let tree = <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><path fill="#855c52" d="M72.06 115.62c-.91-4.71-.99-9.52-1.47-14.29c-.07-.63-.15-1.25-.16-1.88c-.03-1.33-.7-2.21-1.94-2.69c-.64-.25-1.47-.22-2.15-.33c-.73-.12-1.43-.17-2.17-.15c-.07 0-.13.01-.19.02a.99.99 0 0 0-.18-.02c-.75-.02-1.44.03-2.18.15c-.68.11-1.5.07-2.14.33c-1.24.49-1.91 1.36-1.93 2.69c-.02.63-.09 1.25-.16 1.88c-.48 4.76-.56 9.58-1.47 14.29c-.73 3.86-5.35 10.09.84 11.5c4.61 1.04 9.82 1.05 14.43 0c6.22-1.41 1.61-7.64.87-11.5z" /><path fill="#757f3f" d="M120.56 68.48c0-5.76-3.47-10.71-8.42-12.9c2.86-2.49 4.67-6.14 4.67-10.22c0-7.42-5.96-13.43-13.35-13.54c.87-1.69 1.4-3.57 1.4-5.6c0-6.82-5.53-12.36-12.36-12.36c-1.19 0-2.32.22-3.41.54c-.14-6.38-5.33-11.51-11.73-11.51c-2.77 0-5.28.99-7.28 2.59C67.98 2.25 64.36.1 60.22.1c-4.18 0-7.83 2.19-9.91 5.48c-1.68-.92-3.58-1.49-5.63-1.49c-6.5 0-11.77 5.27-11.77 11.77c0 1.02.18 1.99.42 2.93c-.47-.06-.92-.14-1.4-.14c-6.83 0-12.36 5.54-12.36 12.36c0 1.86.44 3.61 1.18 5.19c-5.93 1.45-10.34 6.78-10.34 13.15c0 3.69 1.49 7.03 3.88 9.47c-4.08 2.48-6.82 6.94-6.82 12.06c0 6.09 3.88 11.27 9.3 13.24c-1 2.02-1.58 4.29-1.58 6.69c0 8.37 6.78 15.15 15.15 15.15c2.9 0 5.6-.83 7.91-2.25c2.26 5.53 7.69 9.43 14.02 9.43c4.43 0 8.41-1.92 11.18-4.95c2.78 3.27 6.92 5.35 11.54 5.35c6.98 0 12.84-4.73 14.59-11.15a15.07 15.07 0 0 0 8.13 2.38c8.36 0 15.15-6.78 15.15-15.15c0-2.81-.78-5.43-2.11-7.69c5.67-1.82 9.81-7.15 9.81-13.45z" /><path fill="#bdcf46" d="M31.14 59.78c-3.06.26-4.47-1.92-4.44-4.69c.04-3.17 1.88-6.55 4.39-8.49c.84-.65 1.92-1.09 2.46-2.05c.56-.99.17-2.24.21-3.31c.07-1.87.48-3.72 1.29-5.41c1.22-2.56 3.59-5.06 6.43-5.89c1.88-.54 2.4-2.01 2.71-3.76c.85-4.7 4.79-8.29 9.51-8.91c.63-.08 1.26-.1 1.9-.1c2.76 0 5.64 1.22 5.66 4.39c.04 5.35-6.47 3.19-8.62 6.56c-.43.67-.47 1.37-.64 2.12c-.39 1.68-.28 3.57-1.34 5.02c-1.17 1.58-3.11 1.8-4.62 2.87c-1.54 1.09-2.56 2.85-3 4.67c-.53 2.22-.08 4.65-1.18 6.73c-1.07 2-3.11 2.55-4.88 3.72c-1.07.71-1.61 1.81-1.99 3c-.57 1.81-1.28 2.96-3.25 3.42c-.21.06-.41.1-.6.11z" /></svg>
let login = <svg className='header-login' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Zm-7-3a3 3 0 1 1-6 0a3 3 0 0 1 6 0Zm-3 11.5a8.46 8.46 0 0 0 4.807-1.489c.604-.415.862-1.205.51-1.848C16.59 15.83 15.09 15 12 15c-3.09 0-4.59.83-5.318 2.163c-.351.643-.093 1.433.511 1.848A8.46 8.46 0 0 0 12 20.5Z" clipRule="evenodd" /></svg>
let cartIcon = <svg className='header-cart' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z" /><circle cx="10.5" cy="19.5" r="1.5" fill="currentColor" /><circle cx="17.5" cy="19.5" r="1.5" fill="currentColor" /></svg>



let Header = () => {
    let { cartItemLength } = useContext(CartItemContext)
    return (
        <>
            <header>
                <Link to='/' className='header-logo'>
                    <b>Green</b>
                    {tree}
                    <b className='tree'>Tree</b>
                </Link>

                <ul className='navbar'>
                    <Link to='/'>Home</Link>
                    <Link to='products'>Products </Link>
                    <Link to='FAQ'>FAQ</Link>
                    <Link to='contact'>Contact us</Link>
                </ul >
                <ul className='responsive-navbar'>
                    <span className='menu'>Menu <b>&#9660;</b></span>
                    <ul className='dropdown'>
                        <Link to='/'>Home</Link>
                        <Link to='products'>Products </Link>
                        <Link to='FAQ'>FAQ</Link>
                        <Link to='contact'>Contact us</Link>
                    </ul>
                </ul>



                <span className='headeIcons'>
                    <Link to='login' className='login'>{login}</Link>
                    <Link to='cart' className='cart'>{cartIcon}
                        {cartItemLength > 0 &&

                            <sup>{cartItemLength}</sup>}
                    </Link>
                </span>





            </header >

        </>
    )
}

export default Header