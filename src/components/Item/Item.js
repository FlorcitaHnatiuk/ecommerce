import { ItemContainer, Card, Icon } from './Item.elements'
import { Link } from 'react-router-dom'
import './Item.css' 

const Item = ({ name, price, img, id }) => {
    
    const handleClick = (e) => {
        e.stopPropagation()
    }

    return (
        
        <ItemContainer onClick={handleClick}>
            <Card>
                <div>
                    <img className="icon" src="../img/grapes.PNG"/>
                </div>
                <div>
                    <img className="wine" width="150" height="250" src={img} alt={name}/>
                    <h2>{name}</h2>
                    <p>${price}</p>
                    <Link to={`/detail/${id}`} className="DetailBtn">Ver detalle</Link>
                </div>
            </Card>            
        </ItemContainer>
        )
    }

export default Item