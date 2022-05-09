import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    return ( 
        <>
        <div className="container">
            <img className="containerImg" width="400" src='../../img/oops.jpg' alt='404' />
        </div>
        <div className="containerBtn">
            <button className="btn" onClick={handleClick}>Volver al inicio</button>
        </div>
        </>
    );
}

export default NotFound;