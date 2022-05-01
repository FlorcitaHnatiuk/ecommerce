import { getDocs, collection, query, where, addDoc } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { firestoreDb } from '../../services/firebase'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css' 
import { getProducts } from '../../asyncmock'

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])
    const [show, setShow] = useState(false)

    const { categoryId } = useParams()

    
        const cargarDatos = () => {
            getProducts().then(prods => {
                console.log('Volvio');
                console.log(prods);
    
                prods.map(({ name, price, img, category, stock, productor, variety, corte, enologist, place, barricado }) => {
    
                    addDoc(collection(firestoreDb, "products"), { name, price, img, category, stock, productor, variety, corte, enologist, place, barricado }).then(prods => {
                        console.log('Volvio');
                        console.log(prods);
                    }).catch(error => {
                        console.error(error);
                    }).finally(() => {
                        console.log('Finalizó la promesa');
                    });
                });
    
            }).catch(error => {
                console.error(error);
            }).finally(() => {
                console.log('Finalizó la promesa');
            });
        };


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
            {   show ?
                ( products.length > 0 ? 
                    <ItemList products={products}/>
                :   
                <div>
                    <h2>No se encontraron productos</h2>
                </div>
                )
                : 
                <div className='spinContainer'>
                    <p className='spinner'></p>
                </div>

            }
        </div>
        
    )
}

export default ItemListContainer