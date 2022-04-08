import { DetailBtn, ItemContainer, Card } from './Item.elements'
import { Link } from 'react-router-dom'

const Item = ({ name, price, img }) => {
    return (
        
        <ItemContainer>
            <Card>
                <img width="150" height="250" src={img} alt={name}/>
                <h3>{name}</h3>
                <p>${price}</p>
                <DetailBtn>Ver detalle</DetailBtn>
            </Card>            
        </ItemContainer>
        )
    }

export default Item