import ItemDetail from '../ItemDetail/ItemDetail'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { firestoreDb } from '../../services/firebase'
import { getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = ({ setCart, cart }) => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(false)
    
    const { productId } = useParams()

    useEffect(() => {
        getDoc(doc(firestoreDb, 'products', productId)).then(response => {
            console.log(response)
            const product = { id: response.id, ...response.data()}
            setProduct(product)
            setLoading(true)
        })

        return (() => {
            setProduct()
        })

    }, [productId])


    return (
        <div>
            <ItemDetail {...product} setCart={setCart} cart={cart}/> :
        </div>
    )    
}
export default ItemDetailContainer