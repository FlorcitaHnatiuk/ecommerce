import ItemCount from '../ItemCount/ItemCount'
import { ItemDetailContainer, Detail } from './ItemDetail.elements'
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
                    <li>{variety}</li>
                    <li>{productor}</li>
                    <li>{corte}</li>
                    <li>{enologist}</li>
                    <li>{place}</li>
                    <li>{barricado}</li>
                </Detail>
                <div>
                    {quantity > 0 ? <Link to='/cart'><span>Agregar al carrito</span></Link> : <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>}
                </div>
            </div>  
        </ItemDetailContainer>
        )
    }

export default ItemDetail