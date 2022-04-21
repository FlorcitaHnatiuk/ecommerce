import { useContext } from 'react'
import CartContext from '../../context/CartContext'

const ItemCart = () => {

    const { cart, removeItem } = useContext(CartContext)

    return (
        <ul>
            {cart.map(prod => <li key={prod.id}>{prod.name}  cantidad: {prod.quantity} precio unidad: ${prod.price}  subtotal: ${prod.quantity * prod.price} <button onClick={() => removeItem(prod.id)}>-</button></li>)}   
        </ul>
    )
}

export default ItemCart