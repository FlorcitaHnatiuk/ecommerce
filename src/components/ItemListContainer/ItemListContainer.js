import { Title } from './ItemListContainer.elements'
import { getProducts } from '../../asyncmock'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const [title, setTitle] = useState()
    const { categoryId } = useParams()

    useEffect(() => {
        getProducts(categoryId).then(prods => {
            setProducts(prods)
        }).catch(error => {
            console.log(error)
        })
    }, [categoryId])

    useEffect(() => {
        setTimeout(() => {
            setTitle('cambié!')
        }, 2000)
    })

    const handleClick = () => {
        console.log('click')
    }

    return (
        <div onClick={handleClick}>
            <Title>{title}</Title>
            <ItemList products={products}/>
        </div>
        
    )
}

export default ItemListContainer