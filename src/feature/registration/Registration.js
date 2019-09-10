/**
 * @author Suryasnata Nayak
 * predefined libraries and Components
 */
import React from 'react';
import { Grid, Form, Segment, Button, Header, Message, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { HANDLE_CHANGE_BUSINESS, HANDLE_CHANGE_SUPPLIER, SET_COUNTRY } from '../../actions/constants'
import Autocomplete from 'react-google-autocomplete';
import '../../styles/Registration.css';
import * as postActions from "../../actions/postActions";
import * as getActions from "../../actions/getActions";

/**
 * User defined Components
 * @Component Footer
 * @Component Header
 */
import Footer from '../../components/footer/Footer';
import TopHeader from '../../components/header/Header';
import { countriesList } from './countries';

class Registration extends React.Component {

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

        let action = event.target.name;
        let payload = event.target.value;
        action==='SET_EMAIL'?this.setState({errors:[]}):

        console.log("handle change " + action + ":" + payload)
        this.props.setData(action, payload);
    }
    /**
     * On leaving input field
     */
    handleBlur = (usernameOremail) => {
        this.props.resetSuccess();

        let errors = [];
        let error;

        console.log("blur check")
        const username = this.props.username;
        const email = this.props.email;

        if (usernameOremail === "username")
            this.props.validateUsername(username, usernameOremail)
        else
            this.props.validateUsername(email, usernameOremail);

        console.log(this.props.success)
        if (this.props.successUsername === 'username already Exists') {
            error = { message: 'Usrname is taken' };
            this.setState({ errors: errors.concat(error) });
            return true;
        } else if (this.props.success === 'email already Exists') {
            error = { message: 'emailId is already used' };
            this.setState({ errors: errors.concat(error) });
            return true;
        }
        else {
            this.setState({
                errors: []
            })
        }

    }

    handleEmailBlur = () => {
        let errors = [];
        let error;
        this.setState({
            errors:[]
        })

        console.log("blur check")
        const email = this.props.email;
        this.props.validateEmail(email);

        if (this.props.successEmail === 'Email already Exists') {
            error = { message: 'email already Exists' };
            this.setState({ errors: errors.concat(error) });
            return false;
        }
        else {
            this.setState({
                errors: []
            })
        }
    }

    /**
     * Submit Form
     */
    handleSubmit = event => {

        event.preventDefault();

        if (this.isFormValid()) {
            let errors = [];
            let error;

            const formData = new FormData();
            formData.append('profileImage', this.state.file);

            const registrationData = {
                username: this.props.username,
                address: this.props.address,
                postCode: this.props.postCode,
                password: this.props.password,
                email: this.props.email,
                phoneNumber: this.props.phoneNumber,
                city: this.props.city,
                country: this.props.country,
            }

            const registrationDataAsString = JSON.stringify(registrationData);

            formData.append('registrationData', registrationDataAsString);

            this.props.fetchPostsWithRedux(formData);

            console.log(this.props.success)
            if (this.props.success === 'username already Exists') {
                error = { message: 'Details already Exists.Please check email or username.' };
                this.setState({ errors: errors.concat(error) });
                return false;
            }
            else {
                this.setState({
                    errors: []
                })
            }

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
        console.log("HERE00")
        return !username.length || !email.length || !address.length || !postCode.length || !city.length || !country.length || !password.length || !phoneNumber.length;
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
        this.props.setData(SET_COUNTRY, data.value)
    }

    render() {
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

                        <Header as="h2" icon color="purple" textAlign="center">
                            {/* <Icon name="puzzle piece" color="green" /> */}
                            Registration
                        </Header>

                        <Form onSubmit={this.handleSubmit} size="large">

                            <Segment stacked>
                                <Header as="h5" icon color="grey" textAlign="center">
                                    Get started with marketplace by filling out this form
                        </Header>
                                <br />
                                {/* Company name or Individual */}
                                <Form.Input
                                    onBlur={() => this.handleBlur("username")}
                                    fluid
                                    name="SET_USERNAME"
                                    icon="user"
                                    iconPosition="left"
                                    placeholder="Company name or Individual *"
                                    onChange={this.handleChange}
                                    value={username}
                                    className={this.handleInputError(errors, 'username')}
                                    type="text"
                                />

                                {/* Address */}
                                <Form.Input
                                    fluid
                                    name="SET_ADDRESS"
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
                                        name="SET_POST_CODE"
                                        icon="pin"
                                        iconPosition="left"
                                        placeholder="Post Code *"
                                        onChange={this.handleChange}
                                        value={postCode}
                                        className={this.handleInputError(errors, 'postCode')}
                                        type="text"
                                    />

                                    {/* Country */}
                                    {/* <Form.Input
                                        fluid
                                        name="country"
                                        icon="globe"
                                        iconPosition="left"
                                        placeholder="Country"
                                        onChange={this.handleChange}
                                        value={country}
                                        className={this.handleInputError(errors, 'country')}
                                        type="text"
                                        required
                                    /> */}
                                    {/* <AutocompleteCountry /> */}

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
                                                this.props.setData("SET_CITY", place.name)
                                            }}
                                            onChange={(e) => {
                                                this.props.setData("SET_CITY", e.target.value)
                                            }}
                                            className={this.handleInputError(errors, 'city')}
                                        />
                                    </div>
                                    <br />

                                    {/* City */}
                                    {/* <Form.Input
                                        fluid
                                        name="city"
                                        icon="globe"
                                        iconPosition="left"
                                        placeholder="City"
                                        onChange={this.handleChange}
                                        value={city}
                                        className={this.handleInputError(errors, 'city')}
                                        type="text"
                                    /> */}

                                </Form.Group>

                                {/* D.U.N.S */}
                                <Form.Input
                                    fluid
                                    name="SET_PASSWORD"
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
                                    onBlur={this.handleEmailBlur}
                                    name="SET_EMAIL"
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
                                    name="SET_PHONE_NUMBER"
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
                                    Register
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

                        <Message>Already a user?<Link to="/login"> Login</Link></Message>

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
        email: state.registrationReducer.email,
        businessFlag: state.registrationReducer.businessFlag,
        supplierFlag: state.registrationReducer.supplierFlag,
        supplier: state.registrationReducer.supplier,
        business: state.registrationReducer.business,
        isSupplierSliderEnabled: state.registrationReducer.isSupplierSliderEnabled,
        isBusinessSliderEnabled: state.registrationReducer.isBusinessSliderEnabled,
        country: state.registrationReducer.country,
        username: state.registrationReducer.username,
        address: state.registrationReducer.address,
        postCode: state.registrationReducer.postCode,
        password: state.registrationReducer.password,
        phoneNumber: state.registrationReducer.phoneNumber,
        city: state.registrationReducer.city,
        successEmail: state.registrationReducer.successEmail,
        successUsername: state.registrationReducer.successUsername,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleChangeBusiness: () => dispatch({ type: HANDLE_CHANGE_BUSINESS }),
        handleChangeSupplier: () => dispatch({ type: HANDLE_CHANGE_SUPPLIER }),
        fetchPostsWithRedux: (formData) => dispatch(postActions.fetchPostsWithRedux(formData)),
        setData: (action, payload) => dispatch({ type: action, payload: payload }),
        resetSuccess: () => dispatch({ type: "RESET_SUCCESS" }),
        validateUsername: (username, usernameOremail) => dispatch(getActions.validateUsername(username, usernameOremail)),
        validateEmail: (email) => dispatch(getActions.validateEmail(email))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);