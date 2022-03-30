import { useState } from 'react'
import { Button, Quantity, Counter, AddToCart } from './ItemCount.elements';

const SetQuantity = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(0)

    const decrement = () => {
        if(count > 0) {
            setCount(count - 1) 
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

export default SetQuantity