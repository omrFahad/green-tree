import React, { createContext, useEffect, useRef, useState } from "react";

export const CartItemContext = createContext();


const getCartItem = JSON.parse(localStorage.getItem("items"))
const getHeight = localStorage.getItem('height')

let CartItemProvider = ({ children }) => {



    let [cartItem, setCartItem] = useState(getCartItem || [])
    let [qty, setQty] = useState(1)
    let [num, setNum] = useState(1)
    let [scroll, setScroll] = useState(false)
    const [height, setHeight] = useState(getHeight || '120vh');


    // this function used to update height of cart page because when i refesh cart page the height of cart page removed because it's not stored in local storage
    const updateHeight = (newHeight) => {
        localStorage.setItem('height', newHeight);
        setHeight(newHeight);
    };

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(cartItem))

    }, [cartItem])

    // to increase height of cart page when add a new product to avoid footer issue
    let increaseHeight = () => {
        setNum(num + 0.38)
    }

    // to decrease height of cart page not necessary 
    let decreaseHeight = () => {
        setNum(num - 0.38)
    }

    // Add to cart function 
    let addToCart = (item) => {
        increaseHeight()
        updateHeight(`calc(120vh * ${num})`)

        let finded = cartItem.find(cart => cart.id === item.id)

        if (finded) {
            finded.quantity += 1
        } else {
            setCartItem((prev) => [...prev, item])

        }

    }

    // Remove from cart function
    let removeFromCart = (item) => {
        decreaseHeight()
        updateHeight(`calc(100vh * ${num})`)

        let cart = cartItem.filter((c) => c.id !== item.id)
        setCartItem(cart)
        localStorage.setItem("items", JSON.stringify(cart))

    }
    let quantityHandler = (item) => {
        let finded = cartItem.find(cart => cart.id === item.id)

        if (finded) {
            setCartItem(
                cartItem.map((cartItem) => cartItem.id === item.id ? item : cartItem)
            )
        } else {
            setCartItem((prev) => [...prev, item])

        }
    }


    return (
        <CartItemContext.Provider value={
            {
                cartItem,
                setCartItem,
                increaseHeight,
                decreaseHeight,
                qty,
                num,
                addToCart,
                removeFromCart,
                quantityHandler,
                height,
                updateHeight,
                cartItemLength: cartItem.length,
                scroll,
                setScroll
            }}>
            {children}
        </CartItemContext.Provider>
    )
}


export default CartItemProvider