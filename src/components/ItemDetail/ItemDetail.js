import ItemCount from "../ItemCount/ItemCount"
import { useState } from 'react';

const ItemDetail = ({ id, name, price, img, category, variety, productor, corte, enologist, place, barricado }) => {

    const [products, setProducts] = useState([])

    const handleOnAdd = (quantity) => {
        if (quantity === 0){
            console.log(`Carrito vacío`)
        } else {
            console.log(`Tenés ${quantity} productos en tu carrito`)
        }
    }

    return (
        
        <>
            <div>
                <img src={img} alt={name}/>
            </div>
            <div>
                <h3>{name}</h3>
                <p>${price}</p>
                <ul>
                    <li>{variety}</li>
                    <li>{productor}</li>
                    <li>{corte}</li>
                    <li>{enologist}</li>
                    <li>{place}</li>
                    <li>{barricado}</li>
                </ul>
            </div>  
            <ItemCount initial={1} stock={5} onAdd={handleOnAdd}/>
        </>
        )
    }

export default ItemDetail