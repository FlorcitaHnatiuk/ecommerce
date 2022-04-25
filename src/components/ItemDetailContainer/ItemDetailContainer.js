import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
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
            const product = { if: response.id, ...response.data()}
            setProduct(product)
            setLoading(true)
        })
    }, [productId])


    return (
        <div className="ItemDetailContainer" >
            { 
                loading ? 
                    <span className="loader"></span> :
                product ? 
                    <ItemDetail  {...product}  setCart={setCart} cart={cart}/> :
                    <h1>No tengo ese vino</h1> 
            }
        </div>
    )    
}
export default ItemDetailContainer