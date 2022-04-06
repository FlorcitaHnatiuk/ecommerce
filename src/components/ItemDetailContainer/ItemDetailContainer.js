import { useState, useEffect } from 'react'
import { getProductsbyId } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])

    useEffect(() => {
        getProductsbyId().then(prod => {
            setItem(prod)
        })
    }, [])

    return (
        <div>
            {(item != '') ? <ItemDetail key ={item.id}{...item}/>:<p></p>}
        </div>
    )
}

export default ItemDetailContainer