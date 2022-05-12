import CartContext from '../../context/CartContext'
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
                        <img src="../img/Carrito.png" width="50px" alt="Carrito"/>  
                        { getQuantity() }
                    </div>
                </Link>
            </div>
        </>
    )
}

export default CartWidget