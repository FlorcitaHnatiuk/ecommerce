import CartContext from '../../context/CartContext'
import ItemCart from '../ItemCart/ItemCart'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Cart.css'

const Cart = () => {
    
    const { cart, totalCost, clearCart } = useContext(CartContext)

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
                <div className="PageHeader">
                    <h2 className="CartTitle">Mi carrito</h2>
                </div>
                {cart.map(prod => <ItemCart key={prod.id}{...prod}/>)}
                <p className="Total">Total: ${totalCost()}</p>
                <div className="Btns">
                    <Link className="empty" to={'/'} onClick={() => clearCart()}>Vaciar carrito</Link>
                    <Link className="continue" to={'/form'}>Continuar compra</Link>
                </div>

            </div>
        </>
    )
}

export default Cart