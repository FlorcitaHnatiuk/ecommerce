import { Title } from './ItemListContainer.elements'
import { getProducts } from '../../asyncmock'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        getProducts(categoryId).then(prods => {
            setProducts(prods)
        }).catch(error => {
            console.log(error)
        })
    }, [categoryId])

    return (
        <>
            <Title>{props.greeting}</Title>
            <ItemList products={products}/>
        </>
        
    )
}

export default ItemListContainer