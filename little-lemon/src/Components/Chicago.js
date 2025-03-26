import "../App.css";
import FoodImage5 from "../assets/Mario and Adrian A.png";
import FoodImage6 from "../assets/restaurant chef B.png";
const Chicago = () => {
    return (
        <>
        <section className="company-bio">
    <div className="bio-container">
        <h1 className="company-name">
            Little Lemon
            <span className="company-location">Chicago</span>
        </h1>
        <p className="bio-text">
            Located in the heart of Brooklyn, Little Lemon is a charming neighborhood bistro that brings the zest of Mediterranean flavors right to your table. Our dishes are crafted with fresh, locally sourced ingredients and infused with a touch of creativity to keep you coming back for more. Whether you’re in the mood for a light Greek salad, flavorful bruschetta, or our signature lemon cake, we guarantee a culinary experience to remember. At Little Lemon, every meal is a celebration of good food, great company, and unforgettable memories.
        </p>
    </div>
    <div className="images-container">
        <img className="image image-1" src={FoodImage6} alt="Dish 1" />
        <img className="image image-2" src= {FoodImage5} alt="Dish 2" />
    </div>
</section>
        </>
    );
};

export default Chicago;