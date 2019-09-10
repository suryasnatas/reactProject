/**
 * @author Suryasnata Nayak
 * predefined libraries and Components
 */
import React from 'react';
import { Grid, Form, Segment, Button, Header, Message, Dropdown } from 'semantic-ui-react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { SET_UPDATE_COUNTRY } from '../../actions/constants'
import Autocomplete from 'react-google-autocomplete';
import '../../styles/Registration.css';
import * as actionCreator from "../../actions/postActions";

/**
 * User defined Components
 * @Component Footer
 * @Component Header
 */
import Footer from '../../components/footer/Footer';
import TopHeader from '../../components/header/Header';
import { countriesList } from '../registration/countries';

class Profile extends React.Component {

    constructor(props) {

        super(props)

        /**
         * @params username, address, postCode, password, email 
         * @params phoneNumber, password, passwordConfirmation, city, country 
         * @params errors[], loading
         */
        this.state = {
            errors: [],
            fileErrors: [],
            loading: false,
            file: null,
            countryCode: 'ru'
        }
    }

    /**
     * event change
     */
    handleChange = (event) => {

        let action = event.target.name; //SET_USER_NAME
        let payload = event.target.value; // tanuj

        console.log("handle change " + action + ":" + payload)
        this.props.setUpdatedData(action, payload);
    }

    /**
     * Submit Form
     */
    handleSubmit = event => {

        event.preventDefault();
        console.log("HERE");

        console.log(this.state)

        if (this.isFormValid()) {

            const formData = new FormData();
            formData.append('profileImage', this.state.file);
            
            console.log("usrname is")

            console.log(this.props.username)

            const updatedUserDetails = {
                id: this.props.id,
                username: this.props.username,
                address: this.props.address,
                postCode: this.props.postCode,
                password: this.props.password,
                email: this.props.email,
                phoneNumber: this.props.phoneNumber,
                city: this.props.city,
                country: this.props.country,
            }

            const updatedUserDetailsAsString = JSON.stringify(updatedUserDetails);
            formData.append('updateProfileData', updatedUserDetailsAsString); 
       
            this.props.updateUserDetails(formData);

            return true;
        }
    }

    /**
     * Form Validation
     */
    isFormValid = () => {
        let errors = [];
        let fileErrors = [];
        let error;

        // validate whether the form is empty or not
        if (this.isFormEmpty(this.props)) {

            error = { message: 'Fill all fields' };
            this.setState({ errors: errors.concat(error) });
            return false;
        }

        if (this.state.file === null) {

            error = { message: 'Please Upload your profile picture' };
            this.setState({ fileErrors: fileErrors.concat(error) });
            return false;
        }

        // else if (!this.isPasswordValid(this.state)) {

        //     error = { message: 'Password is invalid' };
        //     this.setState({ errors: errors.concat(error) });
        //     return false;

        // }
        else {
            this.setState({
                errors: []
            })
            // Form valid
            return true;
        }
    }

    /**
     * @boolean @const isFormEmpty
     */
    isFormEmpty = ({ username, address, postCode, city, country, password, email, phoneNumber }) => {
        console.log(!postCode.toString().length)
        console.log(!phoneNumber.toString().length)

        return !username.length || !email.length || !address.length || !postCode.toString().length || !city.length || !country.length || !password.length || !phoneNumber.toString().length;
    }

    /**
     * @boolean @const isPasswordValid
     */
    isPasswordValid = ({ password, passwordConfirmation }) => {
        if (password.length < 6 || passwordConfirmation < 6) {
            return false;
        } else if (password !== passwordConfirmation) {
            return false;
        } else {
            return true;
        }
    }

    displayErrors = errors => errors.map((error, i) => <p key={i}>{error.message}</p>)

    handleInputError = (errors, inputName) => {
        return errors.some(error =>
            error.message.toLowerCase().includes(inputName))
            ?
            'error'
            : ''
    }

    handleSelectedFile = event => {
        this.setState({
            file: event.target.files[0],
            fileErrors: []
        })
    }

    setCountryValue = (e, data) => {
        e.preventDefault();
        this.props.setUpdatedData(SET_UPDATE_COUNTRY, data.value)
    }

    render() {

        if (this.props.isLoggedIn === false) {
            return <Redirect to='' />
        }
        // const { username, address, postCode, city, country, password, email, phoneNumber, password, passwordConfirmation, errors, loading } = this.state;
        const { errors, loading } = this.state;

        const { username, address, postCode, password, email, phoneNumber } = this.props;

        const style = {
            color: "red"
        }

        return (

            <Grid textAlign="center" verticalAlign="middle" className="registerGrid">

                {/* Header Component */}
                <Grid.Row>
                    <Grid.Column>
                        <TopHeader />
                    </Grid.Column>
                </Grid.Row>

                {/* Body */}
                <Grid.Row style={{ marginTop: "10px" }}>

                    <Grid.Column className="grid-column">

                        <Form onSubmit={this.handleSubmit} size="large">

                            <Segment stacked>
                                <Header as="h5" icon color="grey" textAlign="center">
                                    <Header as="h3" icon color="purple" textAlign="center">
                                        {/* <Icon name="puzzle piece" color="green" /> */}
                                        Profile
                                    </Header>
                                </Header>
                                <br />
                                {/* Company name or Individual */}
                                <Form.Input
                                    fluid
                                    name="SET_UPDATE_USERNAME"
                                    icon="user"
                                    iconPosition="left"
                                    placeholder="Company name or Individual *"
                                    onChange={this.handleChange}
                                    value={username}
                                    type="text"
                                    disabled
                                />

                                {/* Address */}
                                <Form.Input
                                    fluid
                                    name="SET_UPDATE_ADDRESS"
                                    icon="home"
                                    iconPosition="left"
                                    placeholder="Address"
                                    onChange={this.handleChange}
                                    value={address}
                                    className={this.handleInputError(errors, 'address')}
                                    type="text"
                                />

                                <Form.Group widths='equal'>

                                    {/* Post code */}
                                    <Form.Input
                                        fluid
                                        name="SET_UPDATE_POST_CODE"
                                        icon="pin"
                                        iconPosition="left"
                                        placeholder="Post Code *"
                                        onChange={this.handleChange}
                                        value={postCode}
                                        className={this.handleInputError(errors, 'postCode')}
                                        type="text"
                                    />

                                    <Dropdown placeholder='Select Country'
                                        fluid search selection
                                        defaultValue={this.props.country}
                                        options={countriesList}
                                        onChange={this.setCountryValue.bind(this)} />
                                    &nbsp;&nbsp;

                                    {/* Town/City */}
                                    <div icon="arrow circle right" className="city-width">
                                        <Autocomplete
                                            types={['(regions)']}
                                            componentRestrictions={{ country: "IN" }}
                                            placeholder="City"
                                            onPlaceSelected={(place) => {
                                                console.log(place);
                                                this.props.setUpdatedData("SET_UPDATE_CITY", place.name)
                                            }}
                                            onChange={(e) => {
                                                this.props.setUpdatedData("SET_UPDATE_CITY", e.target.value)
                                            }}
                                            className={this.handleInputError(errors, 'city')}
                                        />
                                    </div>
                                    <br />


                                </Form.Group>

                                {/* D.U.N.S */}
                                <Form.Input
                                    fluid
                                    name="SET_UPDATE_PASSWORD"
                                    icon="user secret"
                                    iconPosition="left"
                                    placeholder="Password *"
                                    onChange={this.handleChange}
                                    value={password}
                                    className={this.handleInputError(errors, 'password')}
                                    type="password"
                                />

                                {/* Email */}
                                <Form.Input
                                    fluid
                                    name="SET_UPDATE_EMAIL"
                                    icon="mail"
                                    iconPosition="left"
                                    placeholder="Email Address *"
                                    onChange={this.handleChange}
                                    value={email}
                                    className={this.handleInputError(errors, 'email')}
                                    type="email"
                                />

                                {/* Phone Number */}
                                <Form.Input
                                    fluid
                                    name="SET_UPDATE_PHONE_NUMBER"
                                    icon="phone"
                                    iconPosition="left"
                                    placeholder="Phone Number"
                                    onChange={this.handleChange}
                                    value={phoneNumber}
                                    className={this.handleInputError(errors, 'phoneNumber')}
                                    type="number"
                                />

                                <input
                                    type="button"
                                    className="uploadButton"
                                    value="Upload your profile picture"
                                    style={{ float: "left" }}
                                    onClick={() => this.fileInput.click()}
                                />

                                <input
                                    style={{ display: "none" }}
                                    type="file"
                                    onChange={this.handleSelectedFile}
                                    ref={fileInput => this.fileInput = fileInput}
                                />

                                <div style={{ float: "left", marginTop: "10px", color: "red" }}>
                                    <i>
                                        {
                                            this.state.file === null ? "" : this.state.file.name

                                        }
                                        {
                                            this.displayErrors(this.state.fileErrors)
                                        }
                                    </i>
                                </div>

                                <br /><br /><br />
                                {/* <Form.Input
                                fluid
                                name="password"
                                icon="lock"
                                iconPosition="left"
                                placeholder="Password"
                                onChange={this.handleChange}
                                value={password}
                                className={this.handleInputError(errors, 'password')}
                                type="password" />

                             <Form.Input
                                fluid
                                name="passwordConfirmation"
                                icon="repeat"
                                iconPosition="left"
                                placeholder="Password Confirmation"
                                onChange={this.handleChange}
                                value={passwordConfirmation}
                                className={this.handleInputError(errors, 'password')}
                                type="password" />
                                 */}

                                <div className="g-recaptcha" data-sitekey="6Lcpx4oUAAAAAFZMVogUhhVpFccx9RIpj7QF3not" ></div>
                                <br />

                                <input type="checkbox" className="checkbox" required />
                                <label>&nbsp;I accept the <Link to='/'>Terms of Service</Link><i style={style}>*</i></label>

                                <Button
                                    disabled={loading}
                                    className={loading ? 'loading' : ''}
                                    color="purple"
                                    fluid
                                    size="large">
                                    UpdateProfile
                                </Button>

                            </Segment>

                        </Form>

                        {errors.length > 0 && (
                            <Message error>
                                <h3>Error</h3>
                                {this.displayErrors(errors)}
                            </Message>
                        )}

                        {this.state.fileErrors.length > 0 && (
                            <Message error>
                                <h3>Error</h3>
                                {this.displayErrors(this.state.fileErrors)}
                            </Message>
                        )}



                    </Grid.Column>

                    {/* End of Body */}
                </Grid.Row>

                {/* Footer */}
                <Grid.Row>
                    <Grid.Column >
                        <Footer />
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        )
    }
}



const mapStateToProps = state => {
    return {
        id: state.reducer_profileUpdate.id,
        email: state.reducer_profileUpdate.email,
        businessFlag: state.reducer_profileUpdate.businessFlag,
        supplierFlag: state.reducer_profileUpdate.supplierFlag,
        supplier: state.reducer_profileUpdate.supplier,
        business: state.reducer_profileUpdate.business,
        isSupplierSliderEnabled: state.reducer_profileUpdate.isSupplierSliderEnabled,
        isBusinessSliderEnabled: state.reducer_profileUpdate.isBusinessSliderEnabled,
        country: state.reducer_profileUpdate.country,
        username: state.reducer_profileUpdate.username,
        address: state.reducer_profileUpdate.address,
        postCode: state.reducer_profileUpdate.postCode,
        password: state.reducer_profileUpdate.password,
        phoneNumber: state.reducer_profileUpdate.phoneNumber,
        city: state.reducer_profileUpdate.city,
        isLoggedIn: state.loginReducer.isLoggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateUserDetails: (formData) => dispatch(actionCreator.updateUserDetails(formData)),
        setUpdatedData: (action, payload) => dispatch({ type: action, payload: payload })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);