import { useState, useEffect } from 'react'
import { getProductsbyId } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = ({ setCart, cart }) => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    
    const { productId } = useParams()

    useEffect(() => {
        getProductsbyId(productId).then(item => {
            setProduct(item)          
        }).catch(err  => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProduct()
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