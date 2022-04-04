
import { Title } from './ItemListContainer.elements';
import { getProducts } from '../../asyncmock'
import { useState, useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(prods => {
            setProducts(prods)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const handleOnAdd = (quantity, onAdd) => {
        if (quantity === 0){
            console.log(`Carrito vacío`)
        } else {
            console.log(`Tenés ${quantity} productos en tu carrito`)
        }
    }

    return (
        <>
            <Title>{props.greeting}</Title>
            <ItemList products={products}/>
            <ItemCount initial={1} stock={5} onAdd={handleOnAdd}/>
        </>
        
    )
}

export default ItemListContainer