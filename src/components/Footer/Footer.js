import './Footer.css'
import { FaCcVisa, FaBitcoin, FaDollarSign } from "react-icons/fa";
import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Footer = () =>{

    return(
        <footer>
            <div className="container">
                <div>
                    <p>Entregas a domicilio</p>
                </div>
                <div>
                    <p>Todos los medios de pago</p>
                    <div>
                        <ul>
                            <li><FaCcVisa/></li>
                            <li><FaBitcoin /></li>
                            <li><FaDollarSign /></li>
                        </ul> 
                    </div>
                </div>
            </div>
            <div className="container">
                <ul>
                    <li className="social"><SocialIcon url="https://www.linkedin.com/in/florenciahnatiuk/" bgColor="#FFC900" /></li>
                    <li className="social"><SocialIcon url="https://github.com/FlorcitaHnatiuk" network="github" bgColor="#ff5a01"/></li>
                    <li className="social"><SocialIcon url="https://twitter.com/popichulet" network="twitter" bgColor="#EF2F88"/></li>
                </ul>
            </div>
            <div className="container">
                <p className="copyright">Florcita © 2022</p>
            </div>
        </footer>
    )
} 

export default Footer