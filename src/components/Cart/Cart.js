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
                <h1 className="emptyCart">Tu carrito está vacío</h1>
                <div className="home">
                    <Link to={'/'} className="prods">Inicio</Link>
                </div>
            </>
        )
    }
    
    return (
        <>
            <div>
                <div className="pageHeader titleCatContainer">
                    <h2 className="cartTitle">Mi carrito</h2>
                </div>
                {cart.map(prod => <ItemCart key={prod.id}{...prod}/>)}
                <p className="total">Total de la compra: ${totalCost()}</p>
                <div className="btns">
                    <Link className="empty" to={'/'} onClick={() => clearCart()}>Vaciar carrito</Link>
                    <Link className="continue" to={'/form'}>Continuar compra</Link>
                </div>

            </div>
        </>
    )
}

export default Cart