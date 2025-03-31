import "../App.css";
import { Routes, Route } from "react-router-dom"
import Homepage from "../Pages/Homepage";
import BookingPage from "../Pages/BookingPage"

const Main = () => {
    return (
        <Routes> 
            <Route path="/" element={<Homepage />} />
            <Route path="/booking" element={<BookingPage/>}></Route>
        </Routes>
    );
}

export default Main;