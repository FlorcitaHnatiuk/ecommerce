import './Footer.css'
import { FaCcVisa, FaBitcoin, FaDollarSign } from "react-icons/fa";

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
                <p class="copyright">Florcita © 2022</p>
            </div>
        </footer>
    )
} 

export default Footer