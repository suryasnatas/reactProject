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

class Bidding extends Component {

    handleSubmit = (total) => { this.props.finalBidPrice("$" + total) }

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

                                    <Card.Header><Label color="blue" size="big" ribbon>Fiber expansion in Derby</Label></Card.Header>

                                    <Card.Meta>
                                        <span className='ends'>Ends:<span style={{ color: "black" }}>ends</span></span>&nbsp;&nbsp;
                                        <span className='postedBy'>Posted by:<span style={{ color: "black" }}>OpenReach</span></span>&nbsp;&nbsp;
                                        <span className='location'>Location:<span style={{ color: "black" }}>location</span></span>
                                    </Card.Meta>

                                    <div>
                                        <br />
                                        <Button as='div' labelPosition='right'>
                                            <Button basic color='blue'>
                                                <Icon name='fork' />
                                                Talk Talk
                                        </Button>
                                            <Label as='a' basic color='blue' pointing='left'>
                                                $1050
                                        </Label>
                                        </Button>
                                        <Button as='div' labelPosition='right'>
                                            <Button basic color='blue'>
                                                <Icon name='fork' />
                                                Sky
                                        </Button>
                                            <Label as='a' basic color='blue' pointing='left'>
                                                $1000
                                        </Label>
                                        </Button>
                                        <Button as='div' labelPosition='right'>
                                            <Button basic color='blue'>
                                                <Icon name='fork' />
                                                VodaFone
                                        </Button>
                                            <Label as='a' basic color='blue' pointing='left'>
                                                $3000
                                        </Label>
                                        </Button>

                                        <div className="card-button" style={{ color: "blue", borderRadius: "2px", background: "white", marginLeft: "10px", marginRight: "10px" }}>
                                            <table>
                                                <tbody>
                                                    <tr><td><b style={{ color: "black" }}><Label color="purple" ribbon>Your Bid</Label></b></td></tr>
                                                    <tr><td><b>{this.props.finalYourBid}</b></td></tr>
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
                      * MODAL
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
        workItems: state.biddingReducer.workItems
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bidding);