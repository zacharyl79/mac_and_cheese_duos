import { useEffect, useState } from "react";

const BookingPage = () => {
    const [formInfo, setFormInfo] = useState({
        "date": new Date().toISOString().split("T")[0],
        "time": "17:00",
        "guests": 1,
        "occasion": "Birthday"
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formInfo);
    };

    useEffect(() => {
        console.log(formInfo.date);
    }, [formInfo.date])

    return (
        <form style={{"display": "grid", "maxWidth" : "200px", "gap": "20px"}} onSubmit={handleSubmit}>
            <label for="res-date">Choose date: </label>
            <input type="date" id="res-date" value={formInfo.date} onChange={e => setFormInfo(prevState => ({ ...prevState, "date": e.target.valueAsDate.toISOString().split("T")[0]}))}/>
            <label for="res-time">Choose time: </label>
            <select id="res-time" value={formInfo.time} onChange={e => setFormInfo(prev => ({ ...formInfo, "time": e.target.value }))}>
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
            <label for="guests">Number of guests: </label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={formInfo.guests} onChange={e => setFormInfo(prev => ({ ...formInfo, "guests": e.target.value}))}/>
            <label for="occasion">Occasion: </label>
            <select id="occasion" value={formInfo.occasion} onChange={e => setFormInfo(prev => ({ ...formInfo, "occasion": e.target.value }))}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>
    );
};

export default BookingPage;