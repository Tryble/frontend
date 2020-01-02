import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";


const PrivateRoute = ({component: Component, isLoading, isAuthenticated, ...rest}) => (
    <Route
        {...rest}
        render={props => {
            if(isLoading) {
                return <h2>...Loading</h2>
            } else if(!isAuthenticated) {
                return <Redirect to="/login" />
            } else {
                return <Component {...props} />
            }
        }}
    />
)

PrivateRoute.propTypes = {
    isLoading: PropTypes.bool,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isLoading: state.auth.isLoading,
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(PrivateRoute);