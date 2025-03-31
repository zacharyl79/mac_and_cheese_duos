import FoodImage from "../assets/restauranfood.png";
import { Link } from "react-router-dom"

const CallToAction = () => {
    return (
        <section className="call-to-action-container">
            <article className="call-to-action-stack">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <Link to="/booking" style={{"textDecoration": "none"}}>
                    <button className="reservation-button">Reserve A Table</button>
                </Link>
            </article>
            <img src={FoodImage} alt="Coursera Provided"/>
        </section>
    );
};

export default CallToAction;