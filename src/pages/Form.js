
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux'


const FormComponent = () => {
    let dispatch = useDispatch();
    let navigate = useNavigate();

    // if the user is not logged in, redirect to the login page

    useEffect(() => {

        if (!JSON.parse(localStorage.getItem("is_logged_in"))) {
            navigate("../login", { replace: true });
        }

    }, [])


    const submitForm = (values) => {
        // first get the existing values from local storage data
        let data = JSON.parse(localStorage.getItem("data"));
        let user = values

        if(!data) {
            data = {};
        }

        // get count of users
        let count = Object.keys(data).length;

        // add new user to the data object
        data['user'+count] = user;
        console.log('dta', data)

        // save the data to local storage
        localStorage.setItem("data", JSON.stringify(data));

        // then set the values in redux
        dispatch({ type: "SET_DATA", payload: data })

        // redirect to the home page
        navigate("../", { replace: true });
    };



    
        return (
  
            <div className="grid justify-center p-32">
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

                    submitForm(values);

                    setSubmitting(false);
                    }, 400);
                }}
                >
                {({ isSubmitting }) => (
                    <Form className="bg-slate-100 p-8 flex flex-col gap-4" style={{width: '360px', maxWidth: '90vw'}}>
                    <Field className="p-2" type="email" name="email" />
                    <ErrorMessage className="text-red-600" name="email" component="div" />
                    <Field className="p-2 mt-4" type="date" name="dob" />
                    <ErrorMessage className="text-red-600" name="dob" component="div" />
                    <button className="rounded mt-4 text-white bg-slate-600 p-4" type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                    </Form>
                )}
                </Formik>
            </div>
        
          );

  }
  
  export default FormComponent;