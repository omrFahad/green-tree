import { useContext, useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import '../styles/cart.scss'
import { CartItemContext } from '../context/CartData'




let Cart = () => {
    let { height, updateHeight, num, cartItem, quantityHandler, removeFromCart } = useContext(CartItemContext)


    return (
        <div className="cart-page" style={
            { height: height }
        }>
            <h4>Your Shopping Cart</h4>
            <div className="cart-container">
                <div className='cart-items'>

                    {cartItem && cartItem.map(item =>
                        <div className='cart-item'>
                            <div className="cartImage">
                                <img src={`${item.image}`} alt={item.title} />
                            </div>
                            <div className='cartInfo'>
                                <h6>{item.title}</h6>

                            </div>


                            <div className='cartPrice'>
                                <p>${item.price}</p>
                                <div className='cartQty'>
                                    <p><svg onClick={() => quantityHandler({ ...item, quantity: item.quantity + 1 })} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2z" /></svg>{item.quantity}<svg onClick={() => quantityHandler({ ...item, quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity = 1 })} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18 12.998H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2z" /></svg></p>
                                </div>
                                <svg onClick={() => removeFromCart(item)} className='trash' xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m12 .5l-1.4 12.11a1 1 0 0 1-1 .89H4.39a1 1 0 0 1-1-.89L2 .5m-1 0h12m-6 0v13m-4.54-9h9.08M2.98 9h8.04" /></svg>
                            </div>

                        </div>
                    )}
                </div>
                <div className='summary'>
                    <h4>Order Summary</h4>
                    <div className='summary-container'>
                        <div className='order-item'>
                            <span>Total : </span>
                            <span>
                                $
                                {cartItem.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed(2)}
                            </span>
                        </div>
                        <div className='order-item'>
                            <span> Shipping cost :  {cartItem.length >= 1 ? "$200" : "$0.00"} </span>
                        </div>

                    </div>
                </div>
            </div>

        </div >


    )
}


export default Cart