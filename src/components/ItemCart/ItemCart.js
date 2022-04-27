import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import './ItemCart.css'

const ItemCart = ({ id, name, price, quantity }) => {

    const { removeItem } = useContext(CartContext)

    return (
        <>
            <div className='prodCart'>
                <p>{name}</p>
                <p>{quantity}</p>
                <p className='priceProd'>Precio unitario: ${price}</p>
                <p className='subTotalProd'>Subtotal: <span>${quantity * price}</span></p>
                <button className="removeButton" onClick={() => removeItem(id)}>x</button> 
            </div>
        </>
    )
}

export default ItemCart