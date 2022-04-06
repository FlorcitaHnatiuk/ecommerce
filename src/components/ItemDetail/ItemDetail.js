import ItemCount from "../ItemCount/ItemCount"
import { getProducts } from '../../asyncmock'
import { useState, useEffect } from 'react';

const ItemDetail = ({ id, name, price, img, category }) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(prods => {
            setProducts(prods)
        }).catch(error => {
            console.log(error)
        })
    }, [])

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
                <h3>{name}</h3>
                <p>${price}</p>
                <p>{category}</p>
                <ItemCount initial={1} stock={5} onAdd={handleOnAdd}/>
            </div>            
        </>
        )
    }

export default ItemDetail