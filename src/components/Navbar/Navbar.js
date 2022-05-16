import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom'
import { getCategoriesNavbar } from '../../services/firebase/firestore'
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
        <nav className="NavBar navbar navbar-expand-lg navbar-light sticky-top pt-0 pb-0">
            <div className="container-fluid">
                <Link to='/'>
                    <div className="navbar-brand">
                        <h1 className="neon">La Vinería</h1>
                    </div>
                </Link>
                <button className=" navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="Categories collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav justify-content-end w-100">
                        {categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`}
                            className={({ isActive }) => isActive ? 'navSelectedItem' : 'navItem'}>
                            {cat.description}</NavLink>)}
                        <CartWidget />
                    </ul>
                </div>
            </div>
        </nav>
    )
}
