import { ItemContainer, Card } from './Item.elements'
import { Link } from 'react-router-dom'

const Item = ({ name, price, img, id }) => {
    return (
        
        <ItemContainer>
            <Card>
                <img width="150" height="250" src={img} alt={name}/>
                <h2>{name}</h2>
                <p>${price}</p>
                <Link to={`/detail/${id}`} className="DetailBtn">Ver detalle</Link>
            </Card>            
        </ItemContainer>
        )
    }

export default Item