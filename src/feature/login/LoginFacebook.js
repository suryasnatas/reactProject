import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import '../../styles/Login.css';
import { connect } from 'react-redux';
import { LOGIN_SUCCESS } from "../../actions/constants";
import { Redirect } from 'react-router-dom';


class LoginFacebook extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: ""
  };

  responseFacebook = response => {
    console.log(response);

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
    let fbContent;
    const appId = "397420450803748";

    if (this.state.isLoggedIn) {
      this.props.validateUserDetail(this.state.email);
      return <Redirect to='myDashboard' />

    } else {
      fbContent = (
        <FacebookLogin
          appId={appId}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
          cssClass="btnFacebook"
          icon="fa-facebook"
          textButton="&nbsp; Sign In with Facebook"
        />
      );

      return <div>{fbContent}</div>;
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    validateUserDetail: (email) => dispatch({ type: LOGIN_SUCCESS, payload: email })
  }
}

export default connect(null, mapDispatchToProps)(LoginFacebook);
