import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {

    const { cart, removeItem } = useContext(CartContext)

    if(cart.length === 0) {
        return (
            <>
                <h1>No hay productos</h1>
                <Link to={`/`}>Inicio</Link>
            </>
        )
    }

    return (
        <>
        <h1>Cart</h1>
        <ul>
            {
                cart.map(prod => <li key={prod.id}>{prod.name}  cantidad: {prod.quantity} precio unidad: ${prod.price}  subtotal: ${prod.quantity * prod.price} <button onClick={() => removeItem(prod.id)}>-</button></li>)
            }   
        </ul>
        </>
    )
}

export default Cart