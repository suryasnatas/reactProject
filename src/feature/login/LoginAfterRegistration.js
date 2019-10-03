/**
 * @author Suryasnata Nayak
 * predefined libraries and Components
 */
import React from "react";
import { Grid, Form, Segment, Button, Header, Message } from "semantic-ui-react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

/**
 * User defined Components
 * @Component Footer
 * @Component Header
 */

import LoginFacebook from "./LoginFacebook";
import LoginGoogle from './LoginGoogle';
import * as actionCreator from "../../actions/postActions";


class LoginAfterRegistration extends React.Component {

    state = {
        email: "",
        password: "",
        errors: [],
        loading: false,
        loggedIn: false
    };

    displayErrors = errors =>
        errors.map((error, i) => <p key={i}>{error.message}</p>);

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        let errors = [];
        let error;

        if (this.isFormValid(this.state)) {
            this.setState({ errors: [] });
        } else {
            error = { message: 'Fill all the fields' };
            this.setState({ errors: errors.concat(error) });
            return false;
        }

        const formData = new FormData();
        
        const loginData = JSON.stringify({
            email: this.state.email,
            password: this.state.password
        })

        formData.append('loginData', loginData);

        this.props.validateUserDetail(formData, this.state.email);

        // if (this.state.email === "suryasnata.2@gmail.com" && this.state.password === "1234") {
        //     this.props.login();
        // }
        // else {
        //     if (this.state.email !== "suryasnata.2@gmail.com" && this.state.password === "1234")
        //         error = { message: 'Invalid email' };
        //     else if (this.state.email === "suryasnata.2@gmail.com" && this.state.password !== "1234")
        //         error = { message: 'Invalid password' };
        //     else {
        //         error = { message: 'Please enter valid email and password' };
        //     }
        //     this.setState({ errors: errors.concat(error) });
        //     return false;
        // }


    };

    isFormValid = ({ email, password }) => email && password;

    handleInputError = (errors, inputName) => {
        return errors.some(error => error.message.toLowerCase().includes(inputName)) ? "error" : "";
    };

    render() {

        if (this.props.isLoggedIn === true) {
            return (
                <Redirect to='myDashboard' />
            )
        }

        const { email, password, errors, loading } = this.state;

        return (

            <Grid textAlign="center" verticalAlign="middle" className="app">

                {/* Body */}
                <Grid.Row style={{ marginBottom: "50px" }}>

                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as="h1" icon color="purple" textAlign="center">
                            Login
                        </Header>

                        <Form onSubmit={this.handleSubmit} size="large">

                            <Segment stacked>

                                <Form.Input
                                    fluid
                                    name="email"
                                    icon="mail"
                                    iconPosition="left"
                                    placeholder="Email Address"
                                    onChange={this.handleChange}
                                    value={email}
                                    className={this.handleInputError(errors, "email")}
                                    type="email"
                                    required
                                />

                                <Form.Input
                                    fluid
                                    name="password"
                                    icon="lock"
                                    iconPosition="left"
                                    placeholder="Password"
                                    onChange={this.handleChange}
                                    value={password}
                                    className={this.handleInputError(errors, "password")}
                                    type="password"
                                    required
                                />

                                <Button
                                    disabled={loading}
                                    className={loading ? "loading" : ""}
                                    color="purple"
                                    fluid
                                    size="large">
                                    Login
                                </Button>

                            </Segment>
                        </Form>

                        {errors.length > 0 && (
                            <Message error>
                                <h3>Error</h3>
                                {this.displayErrors(errors)}
                            </Message>
                        )}

                        {/* Seperation of line */}
                        <br />
                        <div>
                            <hr className="hr-text" data-content="OR" />
                        </div>
                        <br />
                        <div style={{ display: 'flex', flexWrap: 'wrap' }} >

                            &emsp; <LoginFacebook />
                            &emsp;&emsp;&nbsp;
                            <LoginGoogle />

                        </div>
                        
                    </Grid.Column>

                    {/* End of Body */}
                </Grid.Row>
            </Grid>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.loginReducer.isLoggedIn,
        logoutFlag: state.loginReducer.logoutFlag
    }
}

const mapDispatchToProps = dispatch => {
    return {
        /**
         * @param {*} LOGIN_SUCCESS
         * @Location '../../reducers/feature_login/login.js'
         */
        validateUserDetail: (formData, email) => dispatch(actionCreator.validateUserDetail(formData, email)),
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginAfterRegistration);