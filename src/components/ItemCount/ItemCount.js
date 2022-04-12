import { useState } from 'react'
import { Button, Quantity, Counter, AddToCart } from './ItemCount.elements';

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial)

    const decrement = () => {
        if ((count > initial)){
            setCount(count-1)
        }
    }

    const increment = () => {
        if (count < stock) {
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
        <AddToCart onClick={() => onAdd(count)}>Agregá al carrito</AddToCart>
    </>
    )
}

export default ItemCount