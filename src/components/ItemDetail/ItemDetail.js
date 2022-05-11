import ItemCount from '../ItemCount/ItemCount'
import { ItemDetailContainer, Detail } from './ItemDetail.elements'
import { useState, useContext } from 'react'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'
import './ItemDetail.css'
import { useNotification } from '../../notification/Notification'

const ItemDetail = ({ id, name, price, img, variety, productor, corte, enologist, place, barricado, stock }) => {

    const [quantity, setQuantity] = useState(0)

    const { addItem, isInCart, getQuantityProd } = useContext(CartContext)

    const { setNotification } = useNotification()

    const handleOnAdd = (count) => {
        console.log(count)
        setQuantity(count)
        const productObj = {
            id, name, price
        }
        addItem({ ...productObj, quantity: count })

        setNotification('success', `agregaste ${count} ${name}`)

    }

    return (
        <>
            <div>
                <h2 className="Title">{name}</h2>
            </div>
            <ItemDetailContainer>
                <div>
                    <img className="detailImg" src={img} alt={name} />
                </div>
                <div>
                    <Detail>
                        <p className="Price">Precio unitario: ${price}</p>
                        <p>Varietal: {variety}</p>
                        <p>Productor: {productor}</p>
                        <p>Corte: {corte}</p>
                        <p>Enólogo: {enologist}</p>
                        <p>{place}</p>
                        <p>Barricado: {barricado}</p>
                        <p>Stock: {stock}</p>
                    </Detail>
                </div>
                <div>
                    {false ? <Link to='/cart' className='goCart'><span>Ir al carrito</span></Link> : <ItemCount initial={getQuantityProd(id)} stock={stock} onAdd={handleOnAdd} />}
                </div>
            </ItemDetailContainer>
        </>
    )
}

export default ItemDetail
