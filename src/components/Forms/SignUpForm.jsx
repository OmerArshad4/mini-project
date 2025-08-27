import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import CustomInputField from "../Input/Index";
const SignupForm = () => {

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email").required("Required"),
        city: Yup.string().required("Required"),
        userName: Yup.string().min(8, "UserName Must be 8 characters long").required("Required"),
    });
    return (
        <Formik
            initialValues={{ email: "", userName: "", city: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log("Form Data:", values);
            }}
        >
            {({
                values,
                errors,
                touched,
                handleBlur,
                handleSubmit,
                handleChange,
                resetForm,
                isSubmitting,
                setFieldValue,

            }) => (
                <Form onSubmit={handleSubmit}>
                    <CustomInputField
                        name="userName"
                        type="text"
                        label={"User Name"}
                        placeholder="Enter User name"

                        error={
                            errors.userName && touched.userName
                                ? errors.userName
                                : ""
                        }
                        value={values.userName}
                        onBlurHandle={handleBlur}
                        onChangeHandle={handleChange}
                    />
                    <CustomInputField
                        name="email"
                        type="email"
                        label={"Customer Email"}
                        placeholder="Enter Email"
                        error={
                            errors.email && touched.email
                                ? errors.email
                                : ""
                        }

                        value={values.email}
                        onBlurHandle={handleBlur}
                        onChangeHandle={handleChange}
                    />
                    <CustomInputField
                        name="city"
                        type="text"
                        label={"Customer City"}
                        placeholder="Enter City"
                        error={
                            errors.city && touched.city
                                ? errors.city
                                : ""
                        }

                        value={values.city}
                        onBlurHandle={handleBlur}
                        onChangeHandle={handleChange}
                    />





                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    );
};

export default SignupForm;
