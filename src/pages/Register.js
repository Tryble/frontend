import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Form, Input, Button, Typography } from 'antd';
import { register } from '../store/actions/auth';


const Register = ({ isAuthenticated, register }) => {

  const { Title } = Typography;

  if(isAuthenticated) {
    return <Redirect to="/" />
  }

    return (
        <>
          <Title level={3}>Sign Up</Title>
            
          <Formik 
            initialValues={{firstName: '', lastName: '', email: '', password: ''}}
            validationSchema={Yup.object({
              firstName: Yup.string()
                .required('First Name is required'),
              lastName: Yup.string()
                .required('Last Name is required'),
              email: Yup.string()
                .required('Email is required')
                .email('Please provide a valid Email Address'),
              password: Yup.string()
                .required('Password is required')
            })}
            onSubmit={async (values, {setSubmitting, resetForm}) => {
                resetForm({});
                setSubmitting(true);
                await register(values);
                setSubmitting(false);
            }}
          >
            {({handleSubmit, handleChange, handleBlur, values, errors, isSubmitting, touched}) => (
                <Form onSubmit={handleSubmit}>
                    <Form.Item
                      hasFeedback
                      validateStatus={
                          touched.firstName && errors.firstName ? 'error' : 
                          touched.firstName && !errors.firstName ? 'success' : null
                      }
                      help={touched.firstName && errors.firstName? errors.firstName : null}
                    >
                      <Input
                        type="firstName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                        name="firstName"
                        placeholder="First Name"
                      />
                    </Form.Item>

                    <Form.Item
                      hasFeedback
                      validateStatus={
                          touched.lastName && errors.lastName ? 'error' : 
                          touched.lastName && !errors.lastName ? 'success' : null
                      }
                      help={touched.lastName && errors.lastName? errors.lastName : null}
                    >
                      <Input
                        type="lastName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                        name="lastName"
                        placeholder="Last Name"
                      />
                    </Form.Item>

                    <Form.Item
                        hasFeedback
                        validateStatus={
                            touched.email && errors.email ? 'error' : 
                            touched.email && !errors.email ? 'success' : null
                        }
                        help={touched.email && errors.email? errors.email : null}
                    >
                        <Input
                            type="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            name="email"
                            placeholder="Email"
                        />
                    </Form.Item>
        
                    <Form.Item
                        hasFeedback
                        validateStatus={
                            touched.password && errors.password ? 'error' : 
                            touched.password && !errors.password ? 'success' : null
                        }
                        help={touched.password && errors.password ? errors.password : null}
                    >
                        <Input.Password
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                          name="password"
                          placeholder="Enter Password"
                        />
                    </Form.Item>
                        
                    <Button
                        className="needs-space"
                        type="primary"
                        htmlType="submit"
                        loading={isSubmitting}
                        block
                    >
                      Sign Up
                    </Button>
                </Form>
            )}
        </Formik>

        <Link to="/login">Already have an account?</Link>
      </>
    )
}


const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, { register })(Register);
