import { useFormik } from 'formik';
import * as Yup from 'yup';
import BookingForm from '../Components/BookingForm';
import { useReducer } from 'react';
import { fetchAPI } from "../Utility/fakeAPI";

const BookingPage = () => {
    const formik = useFormik({
        initialValues: {
            "date": new Date().toISOString().split("T")[0],
            "time": "17:00",
            "guests": 1,
            "occasion": "Birthday"
        },
        onSubmit: values => {
            console.log(values);
        },
        validationSchema: Yup.object({
            date: Yup.date().required(),
            time: Yup.string().required(),
            guests: Yup.number().min(1).required(),
            occasion: Yup.string().oneOf(["Birthday", "Anniversary"]).required()
        })
    });

    const updateTimes = (availableTimes, date) => {
        const response = fetchAPI(new Date(date));
        return (response.length !== 0) ? response : availableTimes;
    };

    const initializeTimes = initialAvailableTimes =>
        [...initialAvailableTimes, ...fetchAPI(new Date().toISOString().split("T")[0])];

    const [state, dispatch] = useReducer(updateTimes, [], initializeTimes);

    return (
        <BookingForm formik={formik} availableTimes={state} dispatch={dispatch} />
    );
};

export default BookingPage;