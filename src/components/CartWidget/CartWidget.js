import CartContext from '../../context/CartContext'
import { FaShoppingCart } from 'react-icons/fa'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import './CartWidget.css'

const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)
    return (
        <>
            <div className={getQuantity() === 0 ? 'ocult' : 'hasProd'}>
                <Link to='/cart'><FaShoppingCart /> { getQuantity() }</Link>
            </div>
        </>
    )
}

export default CartWidget