import '../styles/best.scss'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartItemContext } from '../context/CartData'



let Best = ({ data }) => {
    let [slideIndex, setSlideIndex] = useState(0)

    let { addToCart, increaseHeight, qty, setScroll } = useContext(CartItemContext)

    // Handle Click
    let handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex - 1);
        } else {
            setSlideIndex(slideIndex + 1)
        }
    }
    return (
        <div className="best">
            <h2>Best Seller</h2>
            {slideIndex >= 1 && <svg onClick={() => handleClick("left")} className='best-arrow-left' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l6 6m-6-6l6-6" /></svg>
            }
            <div style={{ transform: `translateX(${slideIndex * -255}px)` }} className='best-container'>


                {data.map(item =>
                    <div className='best-box'>
                        <Link to={`/single/${item.id}`} className='link-container' onClick={() => setScroll(true)}>
                            <img src={item.image} />
                            <h6>{item.title}</h6>

                        </Link>
                        <div className='best-price'>${item.price}</div>
                        <svg onClick={() => addToCart({ ...item, quantity: qty })} xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="currentColor" d="M160 96.039v32h304v63.345l-35.5 112.655H149.932L109.932 16H16v32h66.068l40 288.039h329.9L496 196.306V96.039H160zm16.984 272.305a64.073 64.073 0 0 0-64 64a64 64 0 0 0 128 0a64.072 64.072 0 0 0-64-64Zm0 96a32 32 0 1 1 32-32a32.038 32.038 0 0 1-32 32Zm224-96a64.073 64.073 0 0 0-64 64a64 64 0 0 0 128 0a64.072 64.072 0 0 0-64-64Zm0 96a32 32 0 1 1 32-32a32.038 32.038 0 0 1-32 32Z" /></svg>
                    </div>
                )}
            </div>
            {
                slideIndex <= data.length - 1 && <svg onClick={() => handleClick("right")} className='best-arrow-right' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-6 6l6-6m-6-6l6 6" /></svg>
            }

        </div >
    )
}

export default Best