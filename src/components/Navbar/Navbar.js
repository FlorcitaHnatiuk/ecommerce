
import React, { useState } from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom'
import { getCategoriesNavbar} from '../../services/firebase/firestore'
import { useAsync } from '../../hooks/useAsync'
import './Navbar.css'

export const Navbar = () => {

    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)

    useAsync(
        setLoading,
        () => getCategoriesNavbar(categories),
        setCategories,
        () => console.log('Hubo un error en el Navbar')
    )

    return (
        <nav className="NavBar">
            <Link to='/'>
                <h1 className="neon">La Vinería</h1>
            </Link>
            <div className="Categories">
                { categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`}
                    className={({isActive}) => isActive ? 'navSelectedItem' : 'navItem'}>
                    {cat.description}</NavLink>)}
                <CartWidget/>
            </div>
        </nav>
    )
}
