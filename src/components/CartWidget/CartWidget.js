import CartContext from '../../context/CartContext'
import { FaShoppingCart } from 'react-icons/fa'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContainer, CartQuantity } from './CartWidget.elements'


const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)
    return (
        <>
            <Link to={'/cart'}>
                <CartContainer>
                    <FaShoppingCart/>
                    <CartQuantity>
                        { getQuantity() }
                    </CartQuantity>
                </CartContainer>
            </Link>
        </>
    )
}

export default CartWidget