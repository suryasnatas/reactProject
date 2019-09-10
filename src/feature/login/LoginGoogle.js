import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import '../../styles/Login.css'

class LoginFacebook extends Component {
    state = {
        isLoggedIn: false,
        userID: "",
        name: "",
        email: "",
        picture: ""
    };

    responseFacebook = response => {
        // console.log(response);

        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        });
    };

    componentClicked = () => console.log("clicked");

    render() {
        let googleContent;
        const clientId = "972043024831-otvfaqnl7f82gmld9h1s1ctqh0d42a7b.apps.googleusercontent.com";

        if (this.state.isLoggedIn) {
            googleContent = (
                <div
                    style={{
                        width: "100px",
                        margin: "auto",
                        background: "#f4f4f4",
                        padding: "10px"
                    }}
                >
                    <img src={this.state.picture} alt={this.state.name} />
                    <h2>Welcome {this.state.name}</h2>
                    Email: {this.state.email}
                </div>
            );
        } else {
            googleContent = (
                <GoogleLogin
                    clientId={clientId}
                    onSuccess={this.props.SocialSignUp}
                    onFailure={this.props.SocialSignUp}
                >
                </GoogleLogin>
            );
        }

        return <div>{googleContent}</div>;
    }
}

export default LoginFacebook;