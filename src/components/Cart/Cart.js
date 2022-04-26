import CartContext from '../../context/CartContext'
import ItemCart from '../ItemCart/ItemCart'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {

    const { cart, totalCost, clearCart, finishBuy } = useContext(CartContext)

    if(cart.lenght === 0) {
        return (
            <>
                <h2>Carrito vacío</h2>
                <Link to={'/'}>Conocé nuestros productos</Link>
            </>
        )
    }
    
    return (
        <>
            <div>
                {cart.map(prod => <ItemCart key={prod.id}{...prod}/>)}
                <p>Total: {totalCost()}</p>
                <button onClick={()=>clearCart()}>Vaciar</button>
                <button onClick={()=>finishBuy()}>Finalizar</button>
            </div>
        </>
    )
}

export default Cart