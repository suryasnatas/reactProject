

import React, { Component } from "react";
import '../../styles/myDashBoard.css';
import { Container, CardTitle, CardText, Row, Col, CardBody, CardSubtitle, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Card } from 'semantic-ui-react'
import { MDBBtn } from "mdbreact";
import ProjectsStatus from '../../components/projectStatus/ProjectsStatus'
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import * as actionCreator from '../../actions/getActions';
import BTLogo from '../../assets/bt.jpg';

class MyDashBoard extends Component {

    state = {
        active: true
    }

    componentDidMount() {
        // Fetching data from AllProjects Document
        this.props.getDataFromAllProjects();
    }

    render() {
        if (this.props.isLoggedIn === false) {
            return <Redirect to='' />
        }

        return (
            <div style={{ backgroundColor: "white" }}>
                <Header />
                <Container>
                    <div className="card" style={{ marginTop: "40px", backgroundColor: "#eee", paddingLeft: "15px" }}>

                        <ProjectsStatus />

                        <hr className="hr"></hr>
                        <h4><b>Available Projects</b></h4>
                        <Row>
                            {this.props.data.map((el, key) => (

                                <Col sm="8" key={key} >
                                    <Card link raised={true} style={{ backgroundColor: 'white', width: "100%", marginBottom: "5px" }}>

                                        <CardBody >
                                            <table style={{ float: "right" }}>
                                                <tbody>
                                                    <tr><td>BP: ${el.basePrice}</td></tr>
                                                    <tr><td><MDBBtn rounded color="info" style={{ float: "right" }}>BidNow</MDBBtn>
                                                    </td></tr>
                                                </tbody>
                                            </table>

                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td rowSpan="7">
                                                            <button className="button button5">AB</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th style={{ fontSize: "16px" }} colSpan="7"> <a href="/bidding">{el.projectTitle}</a></th>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ color: "grey" }}>Location:</td>
                                                        <td>{el.location}</td>
                                                        {/* <td><div className="text-right"> BP:${el.basePrice} </div></td> */}
                                                    </tr>
                                                    <tr>
                                                        <td style={{ color: "grey" }}>PostedBy:</td>
                                                        <td>{el.postedBy} &emsp;&emsp;
                                                        <span style={{ color: "grey" }}>Ends:</span>
                                                            <span style={{ color: "black" }}>&nbsp;{el.endsBy}</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ color: "grey" }}>comment:</td>
                                                        <td colSpan="5">{el.comment}</td>
                                                    </tr>

                                                    <tr></tr><tr></tr>
                                                </tbody>
                                            </table>
                                        </CardBody>
                                    </Card>
                                    {/* <hr className="hr"></hr> */}
                                </Col>

                            ))}
                            <Col sm="4" className="topright" style={{ height: "200px", width: "350px", marginTop: "8px" }} >

                                <div>

                                    <Card link raised={true} className="border-success" style={{ marginLeft: "17px", marginTop: "28px" }}>

                                        <CardBody>

                                            <CardTitle>
                                                <div id="center">
                                                    <img src={BTLogo} alt="Logo" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
                                                    <h4> Welcome Back,</h4>
                                                    <a href="w" style={{ fontSize: "12px" }}>{this.props.email}</a>
                                                </div>
                                            </CardTitle>
                                            <CardSubtitle>
                                                <div id="center">
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                </div>
                                            </CardSubtitle>

                                            <CardSubtitle>
                                                <div id="center">
                                                    <i className="fa fa-map-marker" id="location"></i>
                                                </div>
                                            </CardSubtitle>

                                            
                                            <CardText id="center"><Link to="/profile"><MDBBtn rounded color="success">Update Profile</MDBBtn></Link></CardText>

                                        </CardBody>
                                    </Card>

                                    <ListGroup>
                                        <ListGroupItem style={{ marginTop: "30px" }}>
                                            <ListGroupItemHeading><b>ProjectOverview</b><hr></hr></ListGroupItemHeading>

                                            <ListGroupItemText>
                                                <span style={{ fontWeight: "bold", fontSize: "16px" }}><a href="wwwwhh">Installation of tellecom Doc</a></span>
                                            </ListGroupItemText>

                                            <ListGroupItemText>
                                                <span style={{ fontSize: "14px" }}>Ends:22/02/2018</span>
                                            </ListGroupItemText>

                                            <ListGroupItemText>
                                                <span style={{ fontSize: "14px" }}>Light source Design Limited  </span> <i className="fa fa-map-marker" id="location1"></i>
                                            </ListGroupItemText>
                                        </ListGroupItem>

                                        <ListGroupItem>

                                            <ListGroupItemHeading>
                                                <span style={{ fontWeight: "bold", fontSize: "16px" }}><a href="wwwwhh">Fiber expesesion in derby</a></span>
                                            </ListGroupItemHeading>

                                            <ListGroupItemText>
                                                <span style={{ fontSize: "14px" }}>Ends:22/02/2018</span>
                                            </ListGroupItemText>
                                            <ListGroupItemText>
                                                <span style={{ fontSize: "14px" }}>Openreach UK </span> <i className="fa fa-map-marker" id="location2"></i>
                                            </ListGroupItemText>
                                        </ListGroupItem>

                                        <ListGroupItem>

                                            <ListGroupItemHeading>
                                                <span style={{ fontWeight: "bold", fontSize: "16px" }}><a href="wwwwhh">Build Temporrary peldestrain walkway</a></span>
                                            </ListGroupItemHeading>

                                            <ListGroupItemText>
                                                <span style={{ fontSize: "14px" }}>Ends:22/02/2018</span>
                                            </ListGroupItemText>

                                            <ListGroupItemText>
                                                <span style={{ fontSize: "14px" }}>Vodafone UK</span> <i className="fa fa-map-marker" id="location2"></i>
                                            </ListGroupItemText>
                                            <hr></hr>
                                            <div id="right">
                                                <Link to="#"> Find more...</Link>
                                            </div>
                                        </ListGroupItem>
                                    </ListGroup>

                                    <hr className="hr"></hr>

                                    <ListGroup>
                                        <ListGroupItem >
                                            <ListGroupItemHeading><b>BidsOverview</b><hr></hr></ListGroupItemHeading>
                                            <ListGroupItemHeading>
                                                <span style={{ fontWeight: "bold", fontSize: "16px" }}><a href="wwwwhh">Fiber expesesion in derby</a></span>
                                            </ListGroupItemHeading>
                                            <ListGroupItemText>
                                                <span style={{ fontSize: "14px" }}>Ends:22/07/2019</span>
                                            </ListGroupItemText>
                                            <ListGroupItemText>
                                                <span style={{ fontSize: "14px" }}>Openraech UK</span> <i className="fa fa-map-marker" id="location2"></i>
                                            </ListGroupItemText>
                                            <ListGroupItemText>
                                                <span style={{ fontSize: "14px" }}>B.P:$200</span>&nbsp;&nbsp;&nbsp; <span style={{ fontSize: "14px" }}>Avg:$100</span>
                                                <span id="rebidsadd"><MDBBtn rounded color="success">ReBid</MDBBtn></span>
                                            </ListGroupItemText>
                                        </ListGroupItem>

                                    </ListGroup>

                                    <hr className="hr"></hr>
                                    <ListGroup>
                                        <ListGroupItem >
                                            <ListGroupItemHeading><b>BidsOverview</b><hr></hr></ListGroupItemHeading>
                                            <ListGroupItemHeading>
                                                <span style={{ fontWeight: "bold", fontSize: "16px" }}><a href="wwwwhh">Fiber expesesion in derby</a></span>
                                            </ListGroupItemHeading>
                                            <ListGroupItemText>
                                                <span style={{ fontSize: "14px" }}>Ends:22/07/2019</span>
                                            </ListGroupItemText>
                                            <ListGroupItemText>
                                                <span style={{ fontSize: "14px" }}>Openraech UK</span> <i className="fa fa-map-marker" id="location2"></i>
                                            </ListGroupItemText>
                                            <ListGroupItemText>
                                                <span id="rebids">
                                                    <span style={{ fontSize: "14px" }}>B.P:$200</span>&nbsp;&nbsp;&nbsp; <span style={{ fontSize: "14px" }}>Avg:$100</span> <span id="rebidsadd"><MDBBtn rounded color="success">ReBid</MDBBtn></span>
                                                </span>
                                            </ListGroupItemText>
                                        </ListGroupItem>

                                    </ListGroup>

                                    <hr className="hr"></hr> <ListGroup>
                                        <ListGroupItem >
                                            <ListGroupItemHeading><b>BidsOverview</b><hr></hr></ListGroupItemHeading>
                                            <ListGroupItemHeading>
                                                <span style={{ fontWeight: "bold", fontSize: "16px" }}><a href="wwwwhh">Fiber expesesion in derby</a></span>
                                            </ListGroupItemHeading>
                                            <ListGroupItemText>
                                                <span style={{ fontSize: "14px" }}>Ends:22/07/2019</span>
                                            </ListGroupItemText>
                                            <ListGroupItemText>
                                                <span style={{ fontSize: "14px" }}>Openraech UK</span> <i className="fa fa-map-marker" id="location2"></i>
                                            </ListGroupItemText>
                                            <ListGroupItemText>
                                                <span id="rebids">
                                                    <span style={{ fontSize: "14px" }}>B.P:$200</span>&nbsp;&nbsp;&nbsp; <span style={{ fontSize: "14px" }}>Avg:$100</span> <span id="rebidsadd"><MDBBtn rounded color="success">ReBid</MDBBtn></span>
                                                </span>
                                            </ListGroupItemText>
                                        </ListGroupItem>

                                    </ListGroup>
                                    <hr className="hr"></hr>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={{ size: 6, order: 2, offset: 3 }}>
                                <Pagination aria-label="Page navigation example">

                                    <PaginationItem disabled>
                                        <PaginationLink previous href="#" />
                                    </PaginationItem>
                                    <PaginationItem active={this.state.active}>
                                        <PaginationLink onClick={() => this.setState({ active: true })} href="#">1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">2</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">3</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">4</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem><PaginationLink next href="#" /></PaginationItem>
                                </Pagination>
                            </Col>
                        </Row>
                    </div>
                </Container>

                <div style={{ marginTop: "40px" }}>
                    <Footer />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.loginReducer.isLoggedIn,
        logoutFlag: state.loginReducer.logoutFlag,
        email: state.loginReducer.email,
        data: state.myDashBoardReducer.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDataFromAllProjects: () => dispatch(actionCreator.getDataFromAllProjects())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyDashBoard);