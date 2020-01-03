import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Form, Input, Button, Typography } from 'antd';
import { login } from '../store/actions/auth';


const Login = ({ isAuthenticated, login, history }) => {

  const { Title } = Typography;

  if(isAuthenticated) {
    return <Redirect to="/" />
  }

    return (
        <>
          <Title level={3}>Log In</Title>
            
          <Formik 
            initialValues={{email: '', password: ''}}
            validationSchema={Yup.object({
              email: Yup.string()
                .required('Email is required')
                .email('Please provide a valid Email Address'),
              password: Yup.string()
                .required('Password is required')
            })}
            onSubmit={async (values, {setSubmitting, resetForm}) => {
              resetForm({});
              setSubmitting(true);
              await login(values);
              setSubmitting(false);
              history.push('/');
            }}
          >
            {({handleSubmit, handleChange, handleBlur, values, errors, isSubmitting, touched}) => (
                <Form onSubmit={handleSubmit}>
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
                      Log In
                    </Button>
                </Form>
            )}
        </Formik>

        <Link to="/register">Don't have an account?</Link>
      </>
    )
}


const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login);
