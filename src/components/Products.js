import { useContext, useState } from 'react'
import '../styles/products.scss'
import '../styles/cart.scss'
import { Link } from 'react-router-dom'
import { CartItemContext } from '../context/CartData'


let Products = ({ data }) => {

    let { addToCart, increaseHeight, qty } = useContext(CartItemContext)

    return (
        <div className="products" id='products'>
            <h2>All Products</h2>

            <div className="products-container">

                {data.map(item =>
                    <div className='products-box'>
                        <Link to={`/single/${item.id}`} className='link-container'>
                            <img src={item.image} />
                            <h5></h5>
                            <h6>{item.title}</h6>
                        </Link>
                        <div className='products-price'>${item.price}</div>
                        <svg onClick={() => addToCart({ ...item, quantity: qty })} xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="currentColor" d="M160 96.039v32h304v63.345l-35.5 112.655H149.932L109.932 16H16v32h66.068l40 288.039h329.9L496 196.306V96.039H160zm16.984 272.305a64.073 64.073 0 0 0-64 64a64 64 0 0 0 128 0a64.072 64.072 0 0 0-64-64Zm0 96a32 32 0 1 1 32-32a32.038 32.038 0 0 1-32 32Zm224-96a64.073 64.073 0 0 0-64 64a64 64 0 0 0 128 0a64.072 64.072 0 0 0-64-64Zm0 96a32 32 0 1 1 32-32a32.038 32.038 0 0 1-32 32Z" /></svg>
                    </div>

                )}
            </div>

        </div >
    )
}

export default Products