import ItemCount from '../ItemCount/ItemCount'
import { ItemDetailContainer, Detail } from './ItemDetail.elements'
import { useState, useContext } from 'react'
import CartContext from '../../context/CartContext'
import {Link} from 'react-router-dom'
import { useNotification } from '../../notification/Notification'

const ItemDetail = ({ id, name, price, img, variety, productor, corte, enologist, place, barricado, stock }) => {
    
    const [quantity, setQuantity]= useState(0)

    const { addItem, isInCart, getQuantityProd } = useContext(CartContext)

    const { setNotification } = useNotification()

    const handleOnAdd = (count) => {
        console.log(count)
        setQuantity(count)
        const productObj = {
            id, name, price
        }
        addItem ({...productObj, quantity: count})

        setNotification('success', `agregaste ${count} ${name}`)

    }

    return (
        
        <ItemDetailContainer>
            <div>
                <img src={img} alt={name}/>
            </div>
            <div>
                <h2>{name}</h2>
                <p>${price}</p>
                <Detail>
                    <li>Varietal: {variety}</li>
                    <li>Productor: {productor}</li>
                    <li>Corte: {corte}</li>
                    <li>Enólogo: {enologist}</li>
                    <li>{place}</li>
                    <li>Barricado: {barricado}</li>
                </Detail>
                <div>
                        {false ? <Link to='/cart' className='goCart'><span>Ir al carrito</span></Link> : <ItemCount initial={getQuantityProd(id)} stock={stock} onAdd={handleOnAdd}/>}
                </div>
            </div>  
        </ItemDetailContainer>
        )
    }

export default ItemDetail
