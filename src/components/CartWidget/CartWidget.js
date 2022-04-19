import { FaShoppingCart } from 'react-icons/fa'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'

const CartWidget = () => {

    const { getQuantity } = useContext (CartContext)
    return (
        <>
            <FaShoppingCart />
            <div>
                { getQuantity() }
            </div>
        </>
    )
}

export default CartWidget