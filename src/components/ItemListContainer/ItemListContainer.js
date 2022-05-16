import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAsync } from '../../hooks/useAsync'
import { getProducts } from '../../services/firebase/firestore'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css' 

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    const { categoryId } = useParams()

    useAsync(
        setLoading,
        () => getProducts(categoryId),
        setProducts,
        () => console.log('Se produjo un error en Item List Container'),
        [categoryId]
    )

    if(loading) {
        return (
                <div className='spinnerContainer'>
                    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                </div>
        )
    }

    if(products.length === 0) {
        return <h2 className="nothingToShow">No hay productos</h2>
    }

    return (
        
        <div>
            <div className="titleCatContainer">
                <h1 className="titleCategory">{categoryId}</h1>  
            </div>
            <ItemList products={products} />
        </div>
        
    )
}

export default ItemListContainer