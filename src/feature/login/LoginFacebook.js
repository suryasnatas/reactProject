import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
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

    // if (this.state.isLoggedIn) {
    //   fbContent = (
    //     <div
    //       style={{
    //         width: "100px",
    //         margin: "auto",
    //         background: "#f4f4f4",
    //         padding: "10px"
    //       }}
    //     >
    //       <img src={this.state.picture} alt={this.state.name} />
    //       <h2>Welcome {this.state.name}</h2>
    //       Email: {this.state.email}
    //     </div>
    //   );
    // } else {
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
   // }

    return <div>{fbContent}</div>;
  }
}

export default LoginFacebook;