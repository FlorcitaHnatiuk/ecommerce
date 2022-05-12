import './Index.css'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

const Index = () => {

    return (
        <div>
            <div className="presentation">
                <img className="winestate" src="../img/wineglass.webp" alt="wineglasses"/>
                <img className="winestate" src="../img/wineglass.webp" alt="wineglasses"/>
            </div>
            <div>
                <ItemListContainer/> 
            </div>
        </div>

    )
}

export default Index