import CartContext from '../../context/CartContext'
import ItemCart from '../ItemCart/ItemCart'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Cart.css'
import { Finish, Empty } from '../Cart/Cart.elements'

const Cart = () => {

    const { cart, totalCost, clearCart, finishBuy } = useContext(CartContext)

    if(cart.length === 0) {
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
                <p>Total: ${totalCost()}</p>
                <Empty onClick={()=>clearCart()}>Vaciar</Empty>
                <Finish className="finish" onClick={()=>finishBuy()}>Finalizar</Finish>
            </div>
        </>
    )
}

export default Cart