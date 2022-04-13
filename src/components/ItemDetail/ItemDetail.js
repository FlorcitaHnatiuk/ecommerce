import ItemCount from '../ItemCount/ItemCount'
import { ItemDetailContainer, Detail } from './ItemDetail.elements'
import { AddToCart } from '../ItemCount/ItemCount.elements'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const ItemDetail = ({ name, price, img, variety, productor, corte, enologist, place, barricado, stock }) => {
    const [quantity, setQuantity]= useState(0)
    
    const handleOnAdd = (count) => {
        console.log('agregar al carrito')
        setQuantity(count)
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
                    {quantity > 0 ? <Link to='/cart'><AddToCart>Ir al carrito</AddToCart></Link> : <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>}
                </div>
            </div>  
        </ItemDetailContainer>
        )
    }

export default ItemDetail