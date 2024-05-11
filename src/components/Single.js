import '../styles/single.scss'
import { useParams } from "react-router-dom"
import { trees } from "../data/trees"
import { CartItemContext } from '../context/CartData'
import { useContext, useState } from 'react'


let Single = () => {

    let { addToCart, scroll, setScroll } = useContext(CartItemContext)
    let [qty, setQty] = useState(1)
    let { id } = useParams()
    let single = trees.find(s => s.id === +id)

    if (scroll == true) {
        window.scrollTo(0, 0);
    }
    return (
        <div className="single">
            <div className="single-contanier">
                <div className="img-container">
                    <img src={`${single.image}`} alt={single.title} />
                </div>
                <div className="info-container">
                    <h4>{single.title}</h4>
                    <p className='single-price'>${single.price}</p>
                    <p className='single-description'>{single.description}</p>
                    <div className='price-container'>
                        <label>Quantity:</label>
                        <input
                            type='number'
                            min={1}
                            max={100}
                            value={qty}
                            onChange={e => setQty(e.target.value)}
                        />
                        <p className='single-price-2'>Price: ${single.price}</p>
                        <p onClick={() => addToCart({ ...single, quantity: qty })} className='add-to-cart'>Add to cart</p>

                    </div>
                </div>
            </div>

        </div >
    )
}

export default Single