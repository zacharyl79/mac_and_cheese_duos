
const AvailableTimes = ({ formik, availableTimes }) => {
    return (
    <select id="time" value={formik.values.time} onChange={formik.handleChange}>
        {availableTimes.map((t, i) => {
            return <option key={i} value={t}>{t}</option>
        })}
    </select>);
};

export default AvailableTimes;