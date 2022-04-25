import { getDocs, collection, query, where } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { firestoreDb } from '../../services/firebase'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])
    const [show, setShow] = useState(false)

    const { categoryId } = useParams()

    useEffect(() => {

        const collectionRef = categoryId 
        ? query(collection (firestoreDb, 'products'), where('category', '==', categoryId))
        : collection (firestoreDb, 'products')

        getDocs(collectionRef).then(response => {
            console.log(response)
            const products = response.docs.map(doc => {
                return { id: doc.id, ...doc.data()}
            })
            setProducts(products)
            setShow(true)
        })
    }, [categoryId])

    const handleClick = () => {
        console.log('click')
    }

    return (
        
        <div onClick={handleClick}>
            {
            show ?
                (products.length > 0 ?
                    <>
                        <h2 className='greeting'>{props.greeting}</h2>
                        <ItemList products={products}/>
                    </>
                    : 
                    <h1>No hay productos</h1>
                ) 
                :
                <h3>Cargando...</h3> 
            }
        </div>
        
    )
}

export default ItemListContainer