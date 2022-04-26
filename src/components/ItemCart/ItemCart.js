import { useContext } from 'react'
import CartContext from '../../context/CartContext'

const ItemCart = ({id, name, price, quantity}) => {

    const { removeItem } = useContext(CartContext)

    return (
        <>
            <div>
                <ul>
                    <li>Cantidad: {quantity}</li>
                    <li>{name}</li>
                    <li>${price}</li>
                    <li>Subtotal: {quantity * price}</li>
                </ul>
                <button onClick={()=>removeItem(id)}>-</button>
            </div>
        </>
    )
}

export default ItemCart