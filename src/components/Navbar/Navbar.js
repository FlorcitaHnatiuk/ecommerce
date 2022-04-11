
import React, { useState, useEffect } from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom'
import { getCategories } from '../../asyncmock';
import './Navbar.css'

export const Navbar = () => {

    const [categories, setCategories] = useState([])

    useEffect (() => {
        getCategories().then(categories => {
            setCategories(categories)
        })
    }, [])


    return (
        <nav className="NavBar" >
            <Link to='/'>
                <h3>La Vinería</h3>
            </Link>
            <div className="Categories">
                { categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`}
                    className={({isActive}) => isActive ? 'navItem' : 'navSelectedItem'}>
                    {cat.description}</NavLink>)}
                <CartWidget />
            </div>
        </nav>
    )
}
