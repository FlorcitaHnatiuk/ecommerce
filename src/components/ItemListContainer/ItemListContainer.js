import { Title } from './ItemListContainer.elements';

const ItemListContainer = (props) => {
    console.log(props.greeting)
    return (
        <Title>{props.greeting}</Title>
    )
}

export default ItemListContainer