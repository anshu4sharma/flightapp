import * as yup from "yup";
let PassengerDetails = yup.object().shape({
    name: yup
        .string()
        .required("Please enter your Name")
        .min(5, "Please enter valid name"),
    email: yup
        .string()
        .required("Please enter your email")
        .min(5, "Please enter a valid email"),
    fname: yup
        .string()
        .required("Please enter First name")
        .min(5, "Please enter valid name"),
    lname: yup
        .string()
        .min(5, "Please enter valid name")
        .required("Please enter Last name"),
    phone: yup
        .number()
        .min(10, "Please enter valid Phone Number")
        .positive("A phone number can't start with a minus")
        .typeError("That doesn't look like a phone number")
        .integer("A phone number can't include a decimal point")
        .required("Please enter your Phone Number"),
});

export default PassengerDetails;