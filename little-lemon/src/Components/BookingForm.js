
const BookingForm = ({ formik, availableTimes, dispatch }) => {

    return (<form style={{ "display": "grid", "maxWidth": "200px", "gap": "20px" }} onSubmit={formik.handleSubmit}>
        <label htmlFor="date">Choose date: </label>
        <input type="date" id="date" value={formik.values.date} onChange={formik.handleChange} />
        <label htmlFor="time">Choose time: </label>
        <select id="time" value={formik.values.time} onChange={formik.handleChange}>
            {availableTimes.map((t, i) => {
                return <option key={i} value={t}>{t}</option>
            })}
        </select>;
        <label htmlFor="guests">Number of guests: </label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={formik.values.guests} onChange={formik.handleChange} />
        <label htmlFor="occasion">Occasion: </label>
        <select id="occasion" value={formik.values.occasion} onChange={formik.handleChange}>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
    </form>);
}

export default BookingForm;