import { useState } from 'react'
import { Button, Quantity, Counter, AddToCart } from './ItemCount.elements';

const ItemCount = ({initial=1, stock, onAdd}) => {
    const [count, setCount] = useState(initial)

    const decrement = () => {
        if ((count > 1)){
            setCount(count - 1)
        }
    }

    const increment = () => {
        if (count < stock){
            setCount(count + 1)
        }
    }


    return (
        <>
        <Counter>
            <Button className="btn" onClick={decrement}>-</Button>
            <Quantity>{count}</Quantity>
            <Button className="btn" onClick={increment}>+</Button>
        </Counter>
        <AddToCart onClick={()=> onAdd(count)}>Agregar al carrito</AddToCart>
    </>
    )
}

export default ItemCount