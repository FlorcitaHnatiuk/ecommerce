
import { Title } from './ItemListContainer.elements';
import SetQuantity from '../ItemCount/ItemCount'

const ItemListContainer = (props) => {

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
            <SetQuantity initial={1} stock={5} onAdd={handleOnAdd}/>
        </>
        
    )
}

export default ItemListContainer