/**
 * @author Suryasnata Nayak
 * predefined libraries and Components
 */
import React from 'react';
import { Grid, Form, Segment, Button, Header, Message } from 'semantic-ui-react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { SET_UPDATE_COUNTRY } from '../../actions/constants'
import '../../styles/Registration.css';
import * as actionCreator from "../../actions/postActions";

/**
 * User defined Components
 * @Component Footer
 * @Component Header
 */
import Footer from '../../components/footer/Footer';
import TopHeader from '../../components/header/Header';

class CreateProject extends React.Component {


    state = {
        errors: [],
        projectTitle: '',
        location: '',
        postedBy: '',
        endsBy: "",
        comment: '',
        basePrice: ''
    }


    /**
     * event change
     */
    handleChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        })

        //this.props.setUpdatedData(action, payload);
    }

    /**
     * Submit Form
     */
    handleSubmit = event => {
        console.log(this.state);
        event.preventDefault();

        if (this.isFormValid()) {

            //const formData = new FormData();

            let projectDetails = {
                projectTitle: this.state.projectTitle,
                location: this.state.location,
                postedBy: this.state.postedBy,
                endsBy: this.state.endsBy,
                comment: this.state.comment,
                basePrice: this.state.basePrice,
              
            }

            //const updatedUserDetailsAsString = JSON.stringify(projectDetails);
            //formData.append('projectDetails', updatedUserDetailsAsString);

            this.props.saveProjectDetails(projectDetails);

            return true;
        }
    }

    /**
     * Form Validation
     */
    isFormValid = () => {
        let errors = [];
        let error;

        // validate whether the form is empty or not
        if (this.isFormEmpty(this.state)) {

            error = { message: 'Fill all fields' };
            this.setState({ errors: errors.concat(error) });
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
    isFormEmpty = ({ projectTitle, location, postedBy, endsBy, comment, basePrice }) => {
        
        return !projectTitle.length || !location.length || !postedBy.length || !endsBy.toString().length || !comment.length || !basePrice.length;
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

        const { errors } = this.state;

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
                                <Header as="h1" icon color="purple" textAlign="center">
                                    {/* <Icon name="puzzle piece" color="green" /> */}
                                    Add Project
                                </Header>
                                <br />
                                {/* Company name or Individual */}
                                <Form.Input
                                    fluid
                                    name="projectTitle"
                                    icon="user"
                                    iconPosition="left"
                                    placeholder="Project name *"
                                    onChange={this.handleChange}
                                    value={this.state.projectTitle}
                                    type="text"

                                />
                                <Form.Input
                                    fluid
                                    name="location"
                                    icon="globe"
                                    iconPosition="left"
                                    placeholder="location name *"
                                    onChange={this.handleChange}
                                    value={this.state.location}
                                    type="text"

                                />

                                <Form.Input
                                    fluid
                                    name="postedBy"
                                    icon="user"
                                    iconPosition="left"
                                    placeholder="postedBy *"
                                    onChange={this.handleChange}
                                    value={this.state.postedBy}
                                    type="text"

                                />

                                <Form.Input
                                    fluid
                                    name="endsBy"
                                    icon="calendar alternate"
                                    iconPosition="left"
                                    placeholder="endsBy *"
                                    onChange={this.handleChange}
                                    value={this.state.endsBy}
                                    type="text"

                                />

                                <Form.Input
                                    fluid
                                    name="comment"
                                    icon="comment"
                                    iconPosition="left"
                                    placeholder="Comment"
                                    onChange={this.handleChange}
                                    value={this.state.comment}
                                    type="text"

                                />
                                <Form.Input
                                    fluid
                                    name="basePrice"
                                    icon="rupee sign"
                                    iconPosition="left"
                                    placeholder="basePrice *"
                                    onChange={this.handleChange}
                                    value={this.state.basePrice}
                                    type="text"

                                />


                                <div className="g-recaptcha" data-sitekey="6Lcpx4oUAAAAAFZMVogUhhVpFccx9RIpj7QF3not" ></div>
                                <br />

                                <input type="checkbox" className="checkbox" required />
                                <label>&nbsp;I accept the <Link to='/'>Terms of Service</Link><i style={style}>*</i></label>

                                <Button
                                    color="purple"
                                    fluid
                                    size="large">
                                    Add Project
                                </Button>

                            </Segment>

                        </Form>

                        {errors.length > 0 && (
                            <Message error>
                                <h3>Error</h3>
                                {this.displayErrors(errors)}
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
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveProjectDetails: (allProjects) => dispatch(actionCreator.saveProjectDetails(allProjects)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);