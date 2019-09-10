import React, { Component } from 'react';
import { ProgressBar } from "react-milestone";
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { Card, Button, Icon } from 'semantic-ui-react'
import DropForUpload from '../../components/dropToUpload/DropForUpload';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Milestone extends Component {

    constructor(props) {
        super(props);

        this.state = {
            milestones: [
                { margin: "10px", name: "Bidding" },
                { margin: "10px", name: "Not Started" },
                { margin: "10px", name: "In Progress" },
                { margin: "10px", name: "Completed" }
            ],

            /**
             * Flag to generate either of two cards
             * i.e, either Documents Card or Work Items card
             * */
            workItems: true,

            activeWorkItems: true,
            activeDocuments: false,

            workItemsJson: [
                { title: "Tubelight holder", uom: "Item", price: "120", quantity: "5", total: "600" },
                { title: "Wiring", uom: "hr", price: "20", quantity: "80", total: "800" },
                { title: "Anchore Switch", uom: "Item", price: "12", quantity: "10", total: "120" },
                { title: "Havels Wire", uom: "Mtr", price: "500", quantity: "1", total: "500" }
            ]
        }
    }

    showContent = (content) => {
        content === "workItems" ?
            (this.setState({
                workItems: true,
                activeWorkItems: true,
                activeDocuments: false,

            }))
            :
            (this.setState({
                workItems: false,
                activeWorkItems: false,
                activeDocuments: true,
            }))
    }

    render() {

        if (this.props.isLoggedIn === false) {
            return <Redirect to='' />
        }
        const { activeWorkItems, activeDocuments, workItems, } = this.state;

        return (
            <div style={{ backgroundColor: "white" }}>

                {/* Header */}
                < Header />

                {/* Body */}
                <div className="container containerClass" >

                    <Card.Group>

                        <Card raised={true} style={{ width: "100%", backgroundColor: "#eee", marginBottom: "10px" }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col" style={{ marginLeft: "220px" }}>

                                        <Card link raised={true} style={{ marginTop: "10px", width: "75%", height: "300px" }}>

                                            {/**
                                            * TODO: MTo make page dynamic
                                            */}
                                            <p style={{ marginLeft: "10px", marginTop: "10px", fontSize: "16px" }}><b>Site reinstatement work for Tower Hamlets</b></p>
                                            <span style={{ marginLeft: "10px", fontSize: "12px" }}>Ends:<b>7/21/2027</b>

                                                <span style={{ marginLeft: "10px", fontSize: "12px" }}>Owner:<b>Light Source design limited</b></span></span>


                                            <div style={{ marginLeft: "15px", marginRight: "15px", marginTop: "50px" }}>
                                                <div className="container">

                                                    <ProgressBar
                                                        percentage={37}
                                                        milestoneCount={4}
                                                        milestoneWidth={25}
                                                    />
                                                    <br />

                                                    <div className="row">
                                                        {
                                                            this.state.milestones.map((milestone, index) => {
                                                                return (
                                                                    milestone.name === "Completed"
                                                                        ?
                                                                        (<div key={index}>
                                                                            {milestone.name}
                                                                        </div>)
                                                                        :
                                                                        (<div className="col" key={index}>
                                                                            {milestone.name}
                                                                        </div>)
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                </div>
                            </div>

                            {
                                //if
                                workItems === false ?
                                    (
                                        <Card link raised={true} style={{ marginLeft: "15px", width: "98%", marginBottom: "10px" }}>
                                            <Card.Header>
                                                <Button size="big" active={activeWorkItems} onClick={() => this.showContent("workItems")}>Work Items</Button>
                                                <Button size="big" style={{ marginRight: "20px" }} active={activeDocuments} onClick={() => this.showContent("documents")}>Documents</Button>
                                            </Card.Header>
                                            <div style={{ marginLeft: "35%", marginTop: "5%" }}>
                                                <DropForUpload />
                                            </div>
                                        </Card>
                                    )
                                    //else
                                    : (<Card link raised={true} style={{ marginLeft: "15px", width: "98%", marginBottom: "10px" }}>

                                        <Card.Header>
                                            <Button size="big" active={activeWorkItems} onClick={() => this.showContent("workItems")} >Work Items</Button>
                                            <Button size="big" active={activeDocuments} onClick={() => this.showContent("documents")}>Documents</Button>
                                        </Card.Header>

                                        <div>
                                            <table className="table">
                                                <thead style={{ backgroundColor: "#eee" }}>
                                                    <tr>
                                                        <th>Title</th>
                                                        <th>UOM</th>
                                                        <th>Price</th>
                                                        <th>Quantity</th>
                                                        <th>Total</th>
                                                        <th></th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        this.state.workItemsJson.map((workItem, index) => {
                                                            return (
                                                                <tr key={index}>
                                                                    <td>{workItem.title}</td>
                                                                    <td>{workItem.uom}</td>
                                                                    <td>{workItem.price}</td>
                                                                    <td>{workItem.quantity}</td>
                                                                    <td>{workItem.total}</td>
                                                                    <td></td>
                                                                    <td>
                                                                        <Button color="orange">
                                                                            <Button.Content>
                                                                                <Icon name="edit outline" />
                                                                            </Button.Content>
                                                                        </Button>
                                                                        <Button color="red">
                                                                            <Button.Content>
                                                                                <Icon name="trash alternate outline" />
                                                                            </Button.Content>
                                                                        </Button>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </Card>)
                            }
                        </Card>
                    </Card.Group>
                </div>

                {/* Footer */}
                <div style={{ marginTop: "20px" }}>
                    <Footer />
                </div>
            </div >
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.loginReducer.isLoggedIn,
    }
}



export default connect(mapStateToProps, null)(Milestone)