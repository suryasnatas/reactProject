import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import '../../styles/Login.css'
import { LOGIN_SUCCESS } from "../../actions/constants";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class LoginFacebook extends Component {
    state = {
        isLoggedIn: false,
        userID: "",
        name: "",
        email: "",
        picture: ""
    };

    responseGoogle = (response) => {
        console.log(response)
        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.profileObj.email,
        });
    }

    componentClicked = () => console.log("clicked");

    render() {
        let googleContent;
        const clientId = "972043024831-otvfaqnl7f82gmld9h1s1ctqh0d42a7b.apps.googleusercontent.com";

        if (this.state.isLoggedIn) {
            this.props.validateUserDetail(this.state.email);
            return <Redirect to='myDashboard' />
        } else {
            googleContent = (
                <GoogleLogin
                    clientId={clientId}
                    onSuccess={this.responseGoogle}
                    onFailure={this.props.SocialSignUp}
                >
                </GoogleLogin>
            );
        }

        return <div>{googleContent}</div>;
    }
}

const mapDispatchToProps = dispatch => {
    return {
        validateUserDetail: (email) => dispatch({ type: LOGIN_SUCCESS, payload: email })
    }
}

export default connect(null, mapDispatchToProps)(LoginFacebook);