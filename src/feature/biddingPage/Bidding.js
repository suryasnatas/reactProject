/**
 * @author Suryasnata Nayak
 */
import React, { Component } from 'react';
import { Card, Button, Icon, Label, Input, Table, Container } from 'semantic-ui-react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer';
import '../../styles/Bid.css';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import '../../styles/App.css';
import * as postActionCreator from '../../actions/postActions';
import * as getActionCreator from '../../actions/getActions';



class Bidding extends Component {

    state = {
        proceed: false,
        showOtherSuppliers: false
    }

    handleSubmit = (total) => {
        this.setState({
            proceed: true
        })
        this.props.finalBidPrice("$" + total)
    }

    handleChange = (param, event) => {
        let key = param.key;

        switch (key) {
            case 0:
                this.props.handleNum1(event.target.value);
                break;
            case 1:
                this.props.handleNum2(event.target.value);
                break;
            case 2:
                this.props.handleNum3(event.target.value);
                break;
            case 3:
                this.props.handleNum4(event.target.value);
                break;
            default:
        }
    }

    handleProceed = (finalBidPrice) => {

        this.setState({
            proceed: false
        })

        let allProject = {
            projectId: this.props.projectId,
            projectTitle: this.props.projectTitle,
            location: this.props.location,
            postedBy: this.props.postedBy,
            endsBy: this.props.endsBy,
            comment: this.props.comment,
            basePrice: this.props.basePrice
        }

        this.props.updateMyBids(allProject, finalBidPrice, this.props.currentLoggedInUserEmail);
    }

    handleShowOtherSuppliers = () => {
        this.props.getOtherSupplierBids(this.props.currentLoggedInUserEmail);
        this.setState({
            showOtherSuppliers: true
        })
    }

    close = () => {
        this.setState({
            showOtherSuppliers: false
        })
    }

    render() {

        if (this.props.isLoggedIn === false) {
            return <Redirect to='' />
        }

        let totalBasePrice = 0;
        this.props.workItems.map(item => totalBasePrice += (item.quantity * item.basePrice))

        return (
            <div>


                {/**
                  * HEADER
                  */}
                <Header />

                {/**
                  * BODY
                  */}
                <Container>
                    <Card.Group>
                        <Card raised={true} style={{ height: "600px", width: "900px", marginLeft: "20px", marginTop: "40px", marginBottom: "20px", backgroundColor: "#eee" }}>

                            <Card link raised={true} style={{ width: "90%", marginLeft: "50px", marginTop: "20px" }}>

                                <Card.Content>

                                    {/* Right */}
                                    <Button
                                        onClick={this.props.toggleModal}
                                        color="blue"
                                        className="card-button"
                                        size="large">
                                        Bid
                                    </Button>

                                    <Card.Header><Label color="blue" size="big" ribbon>{this.props.projectTitle}</Label></Card.Header>

                                    <Card.Meta>
                                        <span className='ends'>Ends:<span style={{ color: "black" }}>ends</span></span>&nbsp;&nbsp;
                                        <span className='postedBy'>Posted by:<span style={{ color: "black" }}>OpenReach</span></span>&nbsp;&nbsp;
                                        <span className='location'>Location:<span style={{ color: "black" }}>location</span></span>
                                    </Card.Meta>

                                    <div>
                                        <br />
                                        <Button basic color='blue' onClick={this.handleShowOtherSuppliers}>
                                            <Icon name='fork' />
                                            Show Bids By Other Suppliers
                                        </Button>


                                        <div className="card-button" style={{ color: "blue", borderRadius: "2px", background: "white", marginLeft: "10px", marginRight: "10px" }}>
                                            <table>
                                                <tbody>
                                                    <tr><td><b style={{ color: "black" }}><Label color="purple" ribbon>Your Bid</Label></b></td></tr>
                                                    <tr><td><b>{this.props.finalYourBid}</b></td></tr>
                                                    {
                                                        this.state.proceed ? (<tr><td>   <Button
                                                            onClick={() => this.handleProceed(this.props.finalYourBid)}
                                                            color="green"
                                                            className="card-button"
                                                            size="small">
                                                            Proceed >>
                                                         </Button>
                                                        </td></tr>) : ("")
                                                    }

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </Card.Content>
                            </Card>
                        </Card>
                    </Card.Group>
                    <br />

                    {/**
                      * MODAL TO SHOW OTHER BIDDERS
                      */}
                    <Modal size="lg" fade={true} isOpen={this.state.showOtherSuppliers}>

                        <ModalHeader>
                            <span style={{ marginLeft: "520px", float: "right", cursor: "pointer" }} onClick={this.close}>X</span>
                            <b style={{ fontSize: "20px", padding: "5px" }}>Bids By Other Suppliers</b><br />
                        </ModalHeader>

                        <ModalBody>
                            {
                                this.props.otherSuppliers.map((supplier, key) => (

                                    <div key={key}>
                                        <Button onClick={() => this.props.getOtherSupplierBids(this.props.currentLoggedInUserEmail)} as='div' labelPosition='right'>
                                            <Button basic color='blue'>
                                                <Icon name='fork' />
                                                {supplier.email}
                                            </Button>
                                            <Label as='a' basic color='blue' pointing='left'>
                                                {supplier.yourBid}
                                            </Label>
                                        </Button>
                                    </div>
                                ))
                            }
                        </ModalBody>

                        <ModalFooter>
                            <Button color="red" onClick={this.close}>Close</Button>
                        </ModalFooter>

                    </Modal>




                    {/**
                      * MODAL FOR BIDDING
                      */}
                    <Modal size="lg" fade={true} isOpen={this.props.modalIsopen}>

                        <ModalHeader>
                            <span style={{ marginLeft: "520px", float: "right", cursor: "pointer" }} onClick={this.props.toggleModal}>X</span>
                            <b style={{ fontSize: "20px", padding: "5px" }}>Fiber expansion in Derby</b><br />
                            <i className="fa fa-map-marker" style={{ fontSize: "24px", padding: "5px" }}></i>
                            <span style={{ fontSize: "18px", color: "gray", marginLeft: "4px", padding: "3px" }}>Shefield and Lincs</span>
                        </ModalHeader>

                        <ModalBody>
                            <Table celled>

                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Unic ID</Table.HeaderCell>
                                        <Table.HeaderCell>Work Items</Table.HeaderCell>
                                        <Table.HeaderCell>Quantity</Table.HeaderCell>
                                        <Table.HeaderCell>Base Price</Table.HeaderCell>
                                        <Table.HeaderCell>Your Price</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    {
                                        this.props.workItems.map((item, key) => {
                                            return (
                                                <Table.Row key={key}>
                                                    <Table.Cell>{item.unicID}</Table.Cell>
                                                    <Table.Cell>{item.workItem}</Table.Cell>
                                                    <Table.Cell>{item.quantity}</Table.Cell>
                                                    <Table.Cell>{item.basePrice}</Table.Cell>
                                                    <Table.Cell>
                                                        <Input onChange={this.handleChange.bind(this, { key })} labelPosition='right' type='text' placeholder='Amount' required="required">
                                                            <Label basic>$</Label>
                                                            <input />
                                                            <Label><Icon name="edit"></Icon></Label>
                                                        </Input>
                                                    </Table.Cell>
                                                </Table.Row>
                                            )
                                        })
                                    }

                                    <Table.Row>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell><b>Total</b></Table.Cell>
                                        <Table.Cell><b>11</b></Table.Cell>
                                        <Table.Cell><b>${totalBasePrice}</b></Table.Cell>
                                        <Table.Cell>
                                            <b style={{ color: "blue" }}>
                                                {isNaN(this.props.yourBid) ? "" : "$" + this.props.yourBid}
                                            </b>
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </ModalBody>

                        <ModalFooter>
                            <Button color="red" onClick={this.props.toggleModal}>Close</Button>
                            <Button color="blue" onClick={() => this.handleSubmit(this.props.yourBid)}>Bid</Button>
                        </ModalFooter>

                    </Modal>
                </Container>
                {/**
                  * END OF BODY
                  */}

                {/**
                  * FOOTER
                  */}
                <Footer />
            </div >
        )
    }
}

const mapStateToProps = state => {
    return {
        modalIsopen: state.biddingReducer.modalIsopen,
        yourBid: state.biddingReducer.yourBid,
        finalYourBid: state.biddingReducer.finalYourBid,
        num1: state.biddingReducer.num1,
        num2: state.biddingReducer.num2,
        num3: state.biddingReducer.num3,
        num4: state.biddingReducer.num4,
        total: state.biddingReducer.total,
        isLoggedIn: state.loginReducer.isLoggedIn,
        workItems: state.biddingReducer.workItems,
        projectId: state.biddingReducer.projectId,
        projectTitle: state.biddingReducer.projectTitle,
        location: state.biddingReducer.location,
        postedBy: state.biddingReducer.postedBy,
        endsBy: state.biddingReducer.endsBy,
        comment: state.biddingReducer.comment,
        basePrice: state.biddingReducer.basePrice,
        currentLoggedInUserEmail: state.loginReducer.email,
        otherSuppliers: state.biddingReducer.otherSuppliers,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleModal: () => dispatch({ type: "TOGGLE_BIDDING_MODAL" }),
        handleNum1: (value) => dispatch({ type: "NUM_ONE", payload: value }),
        handleNum2: (value) => dispatch({ type: "NUM_TWO", payload: value }),
        handleNum3: (value) => dispatch({ type: "NUM_THREE", payload: value }),
        handleNum4: (value) => dispatch({ type: "NUM_FOUR", payload: value }),
        finalBidPrice: (value) => dispatch({ type: "FINAL_BID_PRICE", payload: value }),
        updateMyBids: (allProject, finalBidPrice, email) => dispatch(postActionCreator.updateMyBids(allProject, finalBidPrice, email)),
        getOtherSupplierBids: (email) => dispatch(getActionCreator.getOtherSupplierBids(email))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bidding);