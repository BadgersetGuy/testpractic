
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';


const FormComponent = () => {
    let navigate = useNavigate();

    const submitForm = (values) => {
        // first set the values in local storage
        localStorage.setItem("data", JSON.stringify(values));
        
        // then set the values in redux
        
        // redirect to the home page
        navigate("../", { replace: true });
    };

    // if the user is not logged in, redirect to the login page
    useEffect(() => {

        const isLoggedIn = localStorage.getItem("is_logged_in");
        if (!isLoggedIn) {
            navigate("../login", { replace: true });
        }

    })

    
        return (
  
            <div>
                <Formik
                initialValues={{ email: '', dob: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                    errors.email = 'Required';
                    } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                    errors.email = 'Invalid email address';
                    }

                    if (!values.dob) {
                        errors.date = 'Required';
                    } else if (
                        !/^(19|20)\d\d[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$/.test(values.dob)
                    ) {
                    errors.dob = 'Invalid date';
                    }

                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));

                    submitForm(values);

                    setSubmitting(false);
                    }, 400);
                }}
                >
                {({ isSubmitting }) => (
                    <Form className="bg-slate-50 p-8">
                    <Field type="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                    <Field type="date" name="dob" />
                    <ErrorMessage name="dob" component="div" />
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