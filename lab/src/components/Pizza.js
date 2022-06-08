import '../css/pizza.css'
import pizza from '../images/pizza.jpg'


// Komponent odpowiadający pojedyńczej pizzy
// DO przekazania komponentów zasotosowano destrukturazacje 
function Pizza({name, price, spicy, time}){
    return(
        <div
        className="pizza_box"
        >
            <img
            className='pizza_img'
            src={pizza}
            />

            <div
            className="pizza_name"
            >
                <span>Nazwa: {name}</span>
            </div>

            <div>
                <span>Cena: {price} zł</span>
            </div>

            <div>
                <span>Ostrość: {spicy}</span>
            </div>

            <div>
                <span>Czas oczekiwania: {time} min</span>
            </div>
            
        </div>
    );
}

export default Pizza;