
import React, { useState, useEffect } from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom'
import { firestoreDb } from '../../services/firebase'
import { getDocs, collection } from 'firebase/firestore'
import './Navbar.css'

export const Navbar = () => {

    const [categories, setCategories] = useState([])

    useEffect (() => {
        getDocs(collection(firestoreDb, 'categories')).then(response => {
            const categories = response.docs.map(doc => {
                return { id: doc.id, ...doc.data()}
            })
            setCategories(categories)
        })
    }, [])

    return (
        <nav className="NavBar" >
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
