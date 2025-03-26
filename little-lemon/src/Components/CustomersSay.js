import "../App.css";
import { VscAccount } from "react-icons/vsc";
const CustomersSay = () => {
    return (
        <>
        <section className="testimonials">
    <h2>Testimonials</h2>
    <div className="testimonials-container">
        {/* Testimonial 1 */}
        <div className="testimonial-item">
            <h3>Jane Doe</h3>
            <VscAccount />
            <p className="rating">⭐⭐⭐⭐⭐</p>
            <p>"The food was absolutely delightful, and the service was impeccable. Highly recommend!"</p>
        </div>
        {/* Testimonial 2 */}
        <div className="testimonial-item">
            <h3>John Smith</h3>
            <VscAccount />
            <p className="rating">⭐⭐⭐⭐</p>
            <p>"A cozy atmosphere with great dishes. The lemon cake is a must-try!"</p>
        </div>
        {/* Testimonial 3 */}
        <div className="testimonial-item">
            <h3>Sophia Lee</h3>
            <VscAccount />
            <p className="rating">⭐⭐⭐⭐⭐</p>
            <p>"I've been here multiple times, and every visit is a treat. Bruschetta is divine!"</p>
        </div>
    </div>
</section>

        </>
    );
};

export default CustomersSay;