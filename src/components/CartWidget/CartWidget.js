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
                <Link to='/cart'>
                    <div className="cartQuant">
                        <img src="../img/Carrito.png" width="50px"/>  
                        { getQuantity() }
                    </div>
                </Link>
            </div>
        </>
    )
}

export default CartWidget