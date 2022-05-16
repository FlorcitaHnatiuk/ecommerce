import { ItemContainer, Card } from './Item.elements'
import { Link } from 'react-router-dom'
import './Item.css' 

const Item = ({ name, price, img, id, stock }) => {
    
    const handleClick = (e) => {
        e.stopPropagation()
    }

    return (
        
        <ItemContainer onClick={handleClick}>
            <Card>
                <div className="card">
                    <div className="img">
                        <img className="icon" src="../img/grapes.PNG" alt="grapes icon"/>      
                        <img className="wine" width="150" height="250" src={img} alt={name}/>
                    </div>
                    <h4 className="cardTitle">{name}</h4>
                    <p>${price}</p>
                    <p>{stock}</p>
                    <Link to={`/detail/${id}`} className="detailBtn">Ver detalle</Link>
                </div>
            </Card>            
        </ItemContainer>
        )
    }

export default Item