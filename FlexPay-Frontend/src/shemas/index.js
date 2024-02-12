import * as yup from "yup";
const passwordRule = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required") ,
    email: yup.string().email("please enter a valid email").required("Required"),
    password: yup.string().min(8).matches(passwordRule, {message: "please create a stronger password"}).required("Required"),
    comfirmPassword: yup.string().oneOf([yup.ref("password"), null], "passwords must match").required("Required"),
})

