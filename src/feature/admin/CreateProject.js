/**
 * @author Suryasnata Nayak
 * predefined libraries and Components
 */
import React from 'react';
import { Grid, Form, Segment, Button, Header, Message, Table, Input, Label } from 'semantic-ui-react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { SET_UPDATE_COUNTRY } from '../../actions/constants'
import '../../styles/Registration.css';
import * as actionCreator from "../../actions/postActions";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


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
        basePrice: '',
        WorkItemModal: false,
        workItem: '',
        quantity: '',
        amount: '',
        workItems: [
        ],
        currentIndex: 0,
        addWorkItemButton: true
    }

    handleBlur = (index) => {
        console.log("In Blur")
        if (this.state.currentIndex !== index) {
            this.setState({
                workItem: '',
                quantity: '',
                amount: ''
            })
        }
    }

    handleWorkItems = (event) => {
        event.preventDefault();
        this.setState({
            WorkItemModal: !this.state.WorkItemModal
        })
    }

    handleWorkItemInputChange = (e, index, item) => {

        this.setState({
            currentIndex: index
        })

        let amount = '';
        if (item === 'workItem')
            this.setState({ workItem: e.target.value })
        else if (item === 'quantity')
            this.setState({ quantity: e.target.value })
        else {
            amount = e.target.value
            this.setState({ amount: e.target.value })
        }

        if (this.state.workItem.length > 0 && this.state.quantity.length > 0 && this.state.amount.length > 0) {
            let json = {
                workItem: this.state.workItem,
                quantity: this.state.quantity,
                amount
            }
            // eslint-disable-next-line
            this.state.workItems[index] = json;
        }

        console.log(this.state.workItems)
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
                workItems: this.state.workItems

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

    addWorkItem = (e) => {
        console.log(this.state.workItems)
        this.setState({
            workItems: [...this.state.workItems, ""],
        })
    }

    deleteWorkItem = (key) => {
        console.log("deleted index: " + key)
        var deletedWorkItems = [...this.state.workItems];
        deletedWorkItems.splice(key, 1);
        this.setState({
            workItems: deletedWorkItems
        })
        console.log(this.state.workItems)
    }

    addWorkItemButton = (e) => {
        this.setState({
            workItems: [...this.state.workItems, ""],
            addWorkItemButton: !this.state.addWorkItemButton
        })
    }


    render() {

        if (this.props.isLoggedIn === false) {
            return <Redirect to='' />
        }
        if (this.props.email !== 'suryasnata.2@gmail.com') {
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

                <Modal size="lg" fade={true} isOpen={this.state.WorkItemModal}>

                    <ModalHeader>
                        <span style={{ marginLeft: "520px", float: "right", cursor: "pointer" }} onClick={this.handleWorkItems}>X</span>
                        <b style={{ fontSize: "20px", padding: "5px" }}>Fiber expansion in Derby</b><br />
                        <i className="fa fa-map-marker" style={{ fontSize: "24px", padding: "5px" }}></i>
                        <span style={{ fontSize: "18px", color: "gray", marginLeft: "4px", padding: "3px" }}>Shefield and Lincs</span>
                    </ModalHeader>

                    <ModalBody>
                        <Table celled>

                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Work Items</Table.HeaderCell>
                                    <Table.HeaderCell>Quantity</Table.HeaderCell>
                                    <Table.HeaderCell>Your Price</Table.HeaderCell>
                                    <Table.HeaderCell />
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>

                                {
                                    this.state.workItems.map((workItem, key) => {
                                        return (
                                            <Table.Row key={key}>
                                                <Table.Cell> <Input labelPosition='right' type='text' required="required">
                                                    <Input placeholder='Work Item' onChange={(e) => this.handleWorkItemInputChange(e, key, "workItem")} />
                                                </Input></Table.Cell>
                                                <Table.Cell> <Input labelPosition='right' type='text' required="required">
                                                    <Input placeholder='Quantity' onChange={(e) => this.handleWorkItemInputChange(e, key, "quantity")} />
                                                </Input></Table.Cell>
                                                <Table.Cell>
                                                    <Input labelPosition='right' type='text' required="required">
                                                        <Label basic>$</Label>
                                                        <Input placeholder='Amount'
                                                            onChange={(e) => this.handleWorkItemInputChange(e, key, "price")}
                                                            onBlur={() => this.handleBlur(key)} />
                                                    </Input>
                                                </Table.Cell>
                                                <Table.Cell>
                                                    <Button positive
                                                        size="mini"
                                                        onClick={(e) => this.addWorkItem(e)}
                                                    >+</Button>
                                                    <Button negative
                                                        size="mini"
                                                        onClick={() => this.deleteWorkItem(key)}
                                                    >-</Button>
                                                </Table.Cell>
                                            </Table.Row>
                                        )
                                    })}



                                <Table.Row>

                                    <Table.Cell>
                                        <b style={{ color: "blue" }}>
                                            {isNaN(this.props.yourBid) ? "" : "$" + this.props.yourBid}
                                        </b>

                                        
                                        {this.state.addWorkItemButton ? (<Button positive
                                            size="mini"
                                            onClick={(e) => this.addWorkItemButton(e)}>
                                            Click Here to add WorkItems
                                                </Button>) : ("")}

                                    </Table.Cell>

                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </ModalBody>

                    <ModalFooter>
                        <Button color="red" onClick={this.handleWorkItems}>Close</Button>
                        <Button color="blue" onClick={this.handleWorkItems}>Add WorkItems</Button>
                    </ModalFooter>

                </Modal>


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

                                <Button
                                    color="green"
                                    floated="left"
                                    size="small"
                                    onClick={this.handleWorkItems}>
                                    Add WorkItems
                                    <span color="red">*</span>
                                </Button>
                                <br />
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
        isLoggedIn: state.loginReducer.isLoggedIn,
        email: state.loginReducer.email
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveProjectDetails: (allProjects) => dispatch(actionCreator.saveProjectDetails(allProjects)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);