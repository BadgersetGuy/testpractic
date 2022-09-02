
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';

const FormComponent = () => {
    let navigate = useNavigate();

    // if the user is not logged in, redirect to the login page
    useEffect(() => {

        const isLoggedIn = localStorage.getItem("is_logged_in");
        if (!isLoggedIn) {
            navigate("../login", { replace: true });
        }

    })

    


        return (
  
            <div>
                <h1>Any place in your app!</h1>
                <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                    errors.email = 'Required';
                    } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                    errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    }, 400);
                }}
                >
                {({ isSubmitting }) => (
                    <Form>
                    <Field type="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                    </Form>
                )}
                </Formik>
            </div>
        
          );
    


  }
  
  export default FormComponent;