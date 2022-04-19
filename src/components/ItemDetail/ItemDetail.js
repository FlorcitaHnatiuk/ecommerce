import ItemCount from '../ItemCount/ItemCount'
import { ItemDetailContainer, Detail } from './ItemDetail.elements'
import { AddToCart } from '../ItemCount/ItemCount.elements'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import CartContext from '../../context/CartContext'

const ItemDetail = ({ id, name, price, img, variety, productor, corte, enologist, place, barricado, stock }) => {
    
    const [quantity, setQuantity]= useState(0)

    const { addItem, isInCart } = useContext(CartContext)

    const handleOnAdd = (count) => {
        setQuantity(count)

        const productObj = {
            id, name, price
        }

        addItem ({...productObj, quantity: count})
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
                    {isInCart(id) ? <Link to='/cart'><AddToCart>Ir al carrito</AddToCart></Link> : <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>}
                </div>
            </div>  
        </ItemDetailContainer>
        )
    }

export default ItemDetail