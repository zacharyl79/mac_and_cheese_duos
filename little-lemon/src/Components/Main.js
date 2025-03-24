import "../App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Homepage from "../Pages/Homepage";
import BookingPage from "../Pages/BookingPage"

const Main = () => {
    return (
        <BrowserRouter>
            <Routes> 
                <Route path="/" element={<Homepage />} />
                <Route path="/booking" element={<BookingPage/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Main;