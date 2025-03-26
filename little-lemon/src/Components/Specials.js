import "../App.css";
import FoodImage1 from "../assets/greek salad.png";
import FoodImage2 from "../assets/lemon dessert.png";
import FoodImage3 from "../assets/Vector.png";

const Specials = () => {
    return (
        <section className="specials">
            <h2>Special</h2>
            <div className="specials-container">
                <div className="special-item">
                    <img src={FoodImage1} alt="Dish 1" />
                    <h3>Greek Salad</h3>
                    <p>A classic mix of fresh cucumbers, tomatoes, olives, and feta cheese, drizzled with olive oil.</p>
                    <p>$12.99</p>
                </div>
                <div className="special-item">
                    <img src={FoodImage2} alt="Dish 2" />
                    <h3>Bruchecta</h3>
                    <p>Grilled bread topped with a flavorful blend of fresh tomatoes, basil, and garlic.</p>
                    <p>$15.49</p>
                </div>
                <div className="special-item">
                    <img src={FoodImage3} alt="Dish 3" />
                    <h3>Lemon Desert</h3>
                    <p>A light and zesty dessert topped with a tangy lemon glaze and a hint of sweetness.</p>
                    <p>$10.99</p>
                </div>
            </div>
        </section>
    );
};

export default Specials;