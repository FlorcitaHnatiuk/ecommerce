import CartContext from '../../context/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaOpencart } from "react-icons/fa";
import './CartWidget.css'

const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)
    return (
        <>
            <div className={getQuantity() === 0 ? 'ocult' : 'hasProd'}>
                <Link to='/cart'>
                    <div className="cartQuant">
                        <FaOpencart/>
                        { getQuantity() }
                    </div>
                </Link>
            </div>
        </>
    )
}

export default CartWidget