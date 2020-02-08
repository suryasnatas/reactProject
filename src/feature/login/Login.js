/**
 * @author Suryasnata Nayak
 * predefined libraries and Components
 */
import React from "react";
import { Grid, Form, Segment, Button, Header, Message, Table, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


/**
 * User defined Components
 * @Component Footer
 * @Component Header
 */
import TopHeader from '../../components/header/Header'
import Footer from "../../components/footer/Footer";
import LoginFacebook from "./LoginFacebook";
import LoginGoogle from './LoginGoogle';
import * as postActionCreator from "../../actions/postActions";
import * as getActionCreator from "../../actions/getActions";
import { REMOVE_OTP } from "../../actions/constants";

class Login extends React.Component {

    state = {
        email: "",
        password: "",
        errors: [],
        loading: false,
        loggedIn: false,
        testInput: {
            a: 'a',
            b: 'b'
        },
        phoneNumber: '',
        generateOTPModal: false,
        confirmOtp: '',
        enterNewPassword: false,
        newPassword: "",
        wrongOTP: false,
        passwordUpdated: false
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
    };

    isFormValid = ({ email, password }) => email && password;

    handleInputError = (errors, inputName) => {
        return errors.some(error => error.message.toLowerCase().includes(inputName)) ? "error" : "";
    };

    handleChangeGenerateOTP = (e) => {
        console.log(e.target)

        e.preventDefault();
        this.setState({
            phoneNumber: e.target.value
        })
    }

    handleClickGenerateOTP = (e) => {
        console.log(this.state.phoneNumber)
        if (this.state.phoneNumber.length !== 10) {
            alert("Please enter valid 10 digits phone Number");
        } else {
            this.props.generateOTP(this.state.phoneNumber);
        }
    }

    handleGenerateOTPModal = () => {
        this.props.removeOTP()
        this.setState({
            generateOTPModal: !this.state.generateOTPModal
        })
    }

    handleChangeVerifyOTP = (e) => {
        e.preventDefault();
        this.setState({
            confirmOtp: e.target.value
        })
    }

    verifyOTP = () => {

        this.setState({
            wrongOTP: false
        })

        var otp = this.props.otp;
        var confirmOtp = this.state.confirmOtp;

        console.log(otp.toString())
        console.log(confirmOtp.toString())

        if (otp.toString() === confirmOtp.toString()) {
            console.log("herre")
            this.setState({
                enterNewPassword: true,
            })

        } else {
            this.setState({
                wrongOTP: true
            })
        }
    }

    handleChangeNewPassoword = (e) => {
        console.log(e.target)

        e.preventDefault();
        this.setState({
            newPassword: e.target.value
        })
    }

    updatePassword = (newPassword, phoneNumber) => {

        console.log(phoneNumber)
        console.log(newPassword)
        this.setState({
            generateOTPModal: false,
            passwordUpdated: true
        })
        this.props.updatePassword(newPassword, phoneNumber)
    }

    render() {

        if (this.props.isLoggedIn === true) {
            return (
                <Redirect to='myDashboard' />
            )
        }

        const { email, password, errors, loading } = this.state;

        return (
            <div>


                <Grid textAlign="center" verticalAlign="middle" className="app">


                    {/* Header */}
                    <Grid.Row>
                        <Grid.Column>
                            <TopHeader />
                        </Grid.Column>
                    </Grid.Row>

                    {/* Body */}
                    <Grid.Row style={{ marginBottom: "50px" }}>
                        <Grid.Column style={{ maxWidth: 450 }}>

                            {
                                this.state.passwordUpdated ?
                                    <Message success>Password updated Successfully</Message> : ""
                            }

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
                            <Message>
                                Don't have an account? <a href="/register">Register</a>
                                <br />
                                {/* eslint-disable-next-line */}
                                <a href="#" onClick={this.handleGenerateOTPModal}>Forgot password?</a>
                            </Message>

                        </Grid.Column>

                        {/* End of Body */}
                    </Grid.Row>

                    {/* Footer */}
                    <Grid.Row style={{ marginTop: "140px" }} >
                        <Grid.Column>
                            <Footer />
                        </Grid.Column>
                    </Grid.Row>

                </Grid>

                <Modal size="lg" fade={true} isOpen={this.state.generateOTPModal}>

                    <ModalHeader>
                        <span style={{ marginLeft: "580px", float: "right", cursor: "pointer" }} onClick={this.handleGenerateOTPModal}>X</span>

                        <span style={{ fontSize: "18px", color: "gray", marginLeft: "4px", padding: "3px" }}>Enter phone number</span>
                    </ModalHeader>

                    <ModalBody>
                        <Table celled>

                            <Table.Header>
                                {
                                    this.props.otp === '' ? (<Table.Row>
                                        <Table.HeaderCell>Phone Number:&nbsp;
                                            <Input placeholder="Enter Phone Number..."
                                                onChange={this.handleChangeGenerateOTP}
                                            ></Input>&nbsp;
                                            <Button positive
                                                onClick={this.handleClickGenerateOTP}
                                            >Generate OTP
                                            </Button>
                                        </Table.HeaderCell>
                                    </Table.Row>) : (<Table.Row>
                                        <Table.HeaderCell>&nbsp;
                                        <Input size="large"
                                                placeholder="Enter OTP..."
                                                onChange={this.handleChangeVerifyOTP}
                                                value={this.state.confirmOtp}
                                            >
                                            </Input>&nbsp;
                                        <Button positive
                                                // onChange={this.handleChangeGenerateOTP}
                                                onClick={this.verifyOTP}

                                            >Verify OTP
                                        </Button>
                                        </Table.HeaderCell>
                                    </Table.Row>)
                                }
                                {
                                    this.state.enterNewPassword ? (<Table.Row>
                                        <Table.HeaderCell>&nbsp;
                                                    <Input placeholder="Enter new Password..."
                                                onChange={this.handleChangeNewPassoword}
                                            ></Input>&nbsp;
                                                    <Button positive
                                                onClick={() => this.updatePassword(this.state.newPassword, this.state.phoneNumber)}
                                            >Update Password
                                                    </Button>
                                        </Table.HeaderCell>
                                    </Table.Row>) : (this.state.wrongOTP ? (<Table.Row>
                                        <Table.HeaderCell>Phone Number:&nbsp;
                                                 <Message error>OTP entered is invalid</Message>
                                        </Table.HeaderCell>
                                    </Table.Row>) : (""))
                                }


                            </Table.Header>

                            <Table.Body>

                                <Table.Row>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </ModalBody>

                    <ModalFooter>
                        <Button color="red" onClick={this.handleGenerateOTPModal}>Close</Button>
                    </ModalFooter>

                </Modal>


            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.loginReducer.isLoggedIn,
        logoutFlag: state.loginReducer.logoutFlag,
        otp: state.loginReducer.otp
    }
}

const mapDispatchToProps = dispatch => {
    return {
        /**
         * @param {*} LOGIN_SUCCESS
         * @Location '../../reducers/feature_login/login.js'
         */
        validateUserDetail: (formData, email) => dispatch(postActionCreator.validateUserDetail(formData, email)),
        generateOTP: (phoneNumber) => dispatch(getActionCreator.generateOTP(phoneNumber)),
        updatePassword: (newPassword, phoneNumber) => dispatch(getActionCreator.updatePasseord(newPassword, phoneNumber)),
        removeOTP: () => dispatch({ type: REMOVE_OTP }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);