import "../App.css";
import Interior from "../assets/restaurant.png"

const Footer = () => {
    return (
        <footer className='footer-container'>
            <img src={Interior} alt="Coursera Provided"/>
            <div>
                <ul className="footer-ul">
                    <li className="heading-item">Doormat Navigation</li>
                    <li className="ul-li">Home</li>
                    <li className="ul-li">About</li>
                    <li className="ul-li">Menu</li>
                    <li className="ul-li">Reservation</li>
                    <li className="ul-li">Order Online</li>
                    <li className="ul-li">Login</li>
                </ul>
            </div>
            <div>
                <ul className="footer-ul">
                    <li className="heading-item">Contact</li>
                    <li className="ul-li">Address</li>
                    <li className="ul-li">Phone Number</li>
                    <li className="ul-li">Email</li>
                </ul>
            </div>
            <div>
                <ul className="footer-ul">
                    <li className="special-heading-item">Social Media Link</li>
                    <li className="ul-li">Address</li>
                    <li className="ul-li">Phone Number</li>
                    <li className="ul-li">Email</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;