import '../css/pizza.css'
import pizza from '../images/pizza.jpg'

function Pizza({name, price, spiciness, time}){
    return(
        <div
        className="pizza_box"
        >
            <img
            alt="pizza"
            className="pizza_img"
            src={pizza}
            />

            <div
            className="pizza_name"
            >
                <span>{name}</span>
            </div>

            <div>
                <span>price: {price}zł</span>
            </div>

            <div>
                <span>spiciness: {spiciness}</span>
            </div>

            <div>
                <span>time: {time}</span>
            </div>
        </div>
    );
}

export default Pizza;