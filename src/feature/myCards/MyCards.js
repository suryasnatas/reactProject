
import React, { Component } from "react";

import { Card, CardHeader, CardFooter, CardBody, Col, Row } from 'reactstrap';
import { Link } from "react-router-dom";
//import axios from 'axios';
//import './mybid.css';
import { MDBBtn } from "mdbreact";
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer'

//import { BreadcrumbDivider } from "semantic-ui-react";

class MyCards extends Component {

    constructor() {
        super();
        this.state = {
            data: [

                {
                    "_id": {
                        "timestamp": 1556041886,
                        "counter": 1437298,
                        "time": 1556041886000,
                        "date": "2019-04-23T17:51:26.000+0000",
                        "machineIdentifier": 16360800,
                        "processIdentifier": 778,
                        "timeSecond": 1556041886
                    },
                    "title": "mycard",
                    "prokjectheading": "Building Temporary Pedestrain",
                    "projetctitle": "cableopeeatore",
                    "biddate": "12/02/2018",
                    "worktilte": "Cale",
                    "bestprice": 6000.0,
                    "yourprice": 0.0,
                    "projectstatzus": "under work"
                },
                {
                    "_id": {
                        "timestamp": 1556041886,
                        "counter": 1437299,
                        "time": 1556041886000,
                        "date": "2019-04-23T17:51:26.000+0000",
                        "machineIdentifier": 16360800,
                        "processIdentifier": 778,
                        "timeSecond": 1556041886
                    },
                    "title": "mycard",
                    "prokjectheading": "Building Temporary Pedestrain",
                    "projetctitle": "cableopeeatore",
                    "biddate": "12/02/2018",
                    "worktilte": "Cale",
                    "bestprice": 200.0,
                    "yourprice": 0.0,
                    "projectstatzus": "sucess"
                },
                {
                    "_id": {
                        "timestamp": 1556041886,
                        "counter": 1437300,
                        "time": 1556041886000,
                        "date": "2019-04-23T17:51:26.000+0000",
                        "machineIdentifier": 16360800,
                        "processIdentifier": 778,
                        "timeSecond": 1556041886
                    },
                    "title": "mycard",
                    "prokjectheading": "Building Temporary Pedestrain",
                    "projetctitle": "cableopeeatore",
                    "biddate": "12/02/2018",
                    "worktilte": "Cale",
                    "bestprice": 400.0,
                    "yourprice": 0.0,
                    "projectstatzus": "under work"
                },
                {
                    "_id": {
                        "timestamp": 1556041886,
                        "counter": 1437301,
                        "time": 1556041886000,
                        "date": "2019-04-23T17:51:26.000+0000",
                        "machineIdentifier": 16360800,
                        "processIdentifier": 778,
                        "timeSecond": 1556041886
                    },
                    "title": "mycard",
                    "prokjectheading": "Building Temporary Pedestrain",
                    "projetctitle": "cableopeeatore",
                    "biddate": "12/02/2018",
                    "worktilte": "Cale",
                    "bestprice": 200.0,
                    "yourprice": 0.0,
                    "projectstatzus": "under work"
                },
                {
                    "_id": {
                        "timestamp": 1556041886,
                        "counter": 1437302,
                        "time": 1556041886000,
                        "date": "2019-04-23T17:51:26.000+0000",
                        "machineIdentifier": 16360800,
                        "processIdentifier": 778,
                        "timeSecond": 1556041886
                    },
                    "title": "mycard",
                    "prokjectheading": "Building Temporary Pedestrain",
                    "projetctitle": "cableopeeatore",
                    "biddate": "12/02/2018",
                    "worktilte": "Cale",
                    "bestprice": 200.0,
                    "yourprice": 7000.0,
                    "projectstatzus": "under work"
                },
                {
                    "_id": {
                        "timestamp": 1556042258,
                        "counter": 4841200,
                        "time": 1556042258000,
                        "date": "2019-04-23T17:57:38.000+0000",
                        "machineIdentifier": 15325622,
                        "processIdentifier": 19443,
                        "timeSecond": 1556042258
                    },
                    "title": "mycard",
                    "prokjectheading": "Building Temporary Pedestrain",
                    "projetctitle": "cableopeeatore",
                    "biddate": "12/02/2018",
                    "worktilte": "Cale",
                    "bestprice": 6000.0,
                    "yourprice": 0.0,
                    "projectstatzus": "under work"
                },
                {
                    "_id": {
                        "timestamp": 1556042258,
                        "counter": 4841201,
                        "time": 1556042258000,
                        "date": "2019-04-23T17:57:38.000+0000",
                        "machineIdentifier": 15325622,
                        "processIdentifier": 19443,
                        "timeSecond": 1556042258
                    },
                    "title": "mycard",
                    "prokjectheading": "Building Temporary Pedestrain",
                    "projetctitle": "cableopeeatore",
                    "biddate": "12/02/2018",
                    "worktilte": "Cale",
                    "bestprice": 200.0,
                    "yourprice": 0.0,
                    "projectstatzus": "sucess"
                },
                {
                    "_id": {
                        "timestamp": 1556042258,
                        "counter": 4841202,
                        "time": 1556042258000,
                        "date": "2019-04-23T17:57:38.000+0000",
                        "machineIdentifier": 15325622,
                        "processIdentifier": 19443,
                        "timeSecond": 1556042258
                    },
                    "title": "mycard",
                    "prokjectheading": "Building Temporary Pedestrain",
                    "projetctitle": "cableopeeatore",
                    "biddate": "12/02/2018",
                    "worktilte": "Cale",
                    "bestprice": 400.0,
                    "yourprice": 0.0,
                    "projectstatzus": "under work"
                },
                {
                    "_id": {
                        "timestamp": 1556042258,
                        "counter": 4841203,
                        "time": 1556042258000,
                        "date": "2019-04-23T17:57:38.000+0000",
                        "machineIdentifier": 15325622,
                        "processIdentifier": 19443,
                        "timeSecond": 1556042258
                    },
                    "title": "mycard",
                    "prokjectheading": "Building Temporary Pedestrain",
                    "projetctitle": "cableopeeatore",
                    "biddate": "12/02/2018",
                    "worktilte": "Cale",
                    "bestprice": 200.0,
                    "yourprice": 0.0,
                    "projectstatzus": "under work"
                },
                {
                    "_id": {
                        "timestamp": 1556042258,
                        "counter": 4841204,
                        "time": 1556042258000,
                        "date": "2019-04-23T17:57:38.000+0000",
                        "machineIdentifier": 15325622,
                        "processIdentifier": 19443,
                        "timeSecond": 1556042258
                    },
                    "title": "mycard",
                    "prokjectheading": "Building Temporary Pedestrain",
                    "projetctitle": "cableopeeatore",
                    "biddate": "12/02/2018",
                    "worktilte": "Cale",
                    "bestprice": 200.0,
                    "yourprice": 7000.0,
                    "projectstatzus": "under work"
                },
                {
                    "_id": {
                        "timestamp": 1556042354,
                        "counter": 11338834,
                        "time": 1556042354000,
                        "date": "2019-04-23T17:59:14.000+0000",
                        "machineIdentifier": 12862117,
                        "processIdentifier": 15286,
                        "timeSecond": 1556042354
                    },
                    "title": "mycard",
                    "prokjectheading": "Building Temporary Pedestrain",
                    "projetctitle": "cableopeeatore",
                    "biddate": "12/02/2018",
                    "worktilte": "Cale",
                    "bestprice": 6000.0,
                    "yourprice": 0.0,
                    "projectstatzus": "under work"
                },
                {
                    "_id": {
                        "timestamp": 1556042354,
                        "counter": 11338835,
                        "time": 1556042354000,
                        "date": "2019-04-23T17:59:14.000+0000",
                        "machineIdentifier": 12862117,
                        "processIdentifier": 15286,
                        "timeSecond": 1556042354
                    },
                    "title": "mycard",
                    "prokjectheading": "Building Temporary Pedestrain",
                    "projetctitle": "cableopeeatore",
                    "biddate": "12/02/2018",
                    "worktilte": "Cale",
                    "bestprice": 200.0,
                    "yourprice": 0.0,
                    "projectstatzus": "sucess"
                },
                {
                    "_id": {
                        "timestamp": 1556042354,
                        "counter": 11338836,
                        "time": 1556042354000,
                        "date": "2019-04-23T17:59:14.000+0000",
                        "machineIdentifier": 12862117,
                        "processIdentifier": 15286,
                        "timeSecond": 1556042354
                    },
                    "title": "mycard",
                    "prokjectheading": "Building Temporary Pedestrain",
                    "projetctitle": "cableopeeatore",
                    "biddate": "12/02/2018",
                    "worktilte": "Cale",
                    "bestprice": 400.0,
                    "yourprice": 0.0,
                    "projectstatzus": "under work"
                },
                {
                    "_id": {
                        "timestamp": 1556042354,
                        "counter": 11338837,
                        "time": 1556042354000,
                        "date": "2019-04-23T17:59:14.000+0000",
                        "machineIdentifier": 12862117,
                        "processIdentifier": 15286,
                        "timeSecond": 1556042354
                    },
                    "title": "mycard",
                    "prokjectheading": "Building Temporary Pedestrain",
                    "projetctitle": "cableopeeatore",
                    "biddate": "12/02/2018",
                    "worktilte": "Cale",
                    "bestprice": 200.0,
                    "yourprice": 0.0,
                    "projectstatzus": "under work"
                },
                {
                    "_id": {
                        "timestamp": 1556042354,
                        "counter": 11338838,
                        "time": 1556042354000,
                        "date": "2019-04-23T17:59:14.000+0000",
                        "machineIdentifier": 12862117,
                        "processIdentifier": 15286,
                        "timeSecond": 1556042354
                    },
                    "title": "mycard",
                    "prokjectheading": "Building Temporary Pedestrain",
                    "projetctitle": "cableopeeatore",
                    "biddate": "12/02/2018",
                    "worktilte": "Cale",
                    "bestprice": 200.0,
                    "yourprice": 7000.0,
                    "projectstatzus": "under work"
                },
                {
                    "_id": {
                        "timestamp": 1556042803,
                        "counter": 7304436,
                        "time": 1556042803000,
                        "date": "2019-04-23T18:06:43.000+0000",
                        "machineIdentifier": 8623287,
                        "processIdentifier": 4964,
                        "timeSecond": 1556042803
                    },
                    "title": "mycard",
                    "prokjectheading": "Building Temporary Pedestrain",
                    "projetctitle": "cableopeeatore",
                    "biddate": "12/02/2018",
                    "worktilte": "Cale",
                    "bestprice": 6000.0,
                    "yourprice": 0.0,
                    "projectstatzus": "under work"
                },
                {
                    "_id": {
                        "timestamp": 1556042803,
                        "counter": 7304437,
                        "time": 1556042803000,
                        "date": "2019-04-23T18:06:43.000+0000",
                        "machineIdentifier": 8623287,
                        "processIdentifier": 4964,
                        "timeSecond": 1556042803
                    },
                    "title": "mycard",
                    "prokjectheading": "Building Temporary Pedestrain",
                    "projetctitle": "cableopeeatore",
                    "biddate": "12/02/2018",
                    "worktilte": "Cale",
                    "bestprice": 200.0,
                    "yourprice": 0.0,
                    "projectstatzus": "sucess"
                },
                {
                    "_id": {
                        "timestamp": 1556042803,
                        "counter": 7304438,
                        "time": 1556042803000,
                        "date": "2019-04-23T18:06:43.000+0000",
                        "machineIdentifier": 8623287,
                        "processIdentifier": 4964,
                        "timeSecond": 1556042803
                    },
                    "title": "mycard",
                    "prokjectheading": "Building Temporary Pedestrain",
                    "projetctitle": "cableopeeatore",
                    "biddate": "12/02/2018",
                    "worktilte": "Cale",
                    "bestprice": 400.0,
                    "yourprice": 0.0,
                    "projectstatzus": "under work"
                },
                {
                    "_id": {
                        "timestamp": 1556042803,
                        "counter": 7304439,
                        "time": 1556042803000,
                        "date": "2019-04-23T18:06:43.000+0000",
                        "machineIdentifier": 8623287,
                        "processIdentifier": 4964,
                        "timeSecond": 1556042803
                    },
                    "title": "mycard",
                    "prokjectheading": "Building Temporary Pedestrain",
                    "projetctitle": "cableopeeatore",
                    "biddate": "12/02/2018",
                    "worktilte": "Cale",
                    "bestprice": 200.0,
                    "yourprice": 0.0,
                    "projectstatzus": "under work"
                },
                {
                    "_id": {
                        "timestamp": 1556042803,
                        "counter": 7304440,
                        "time": 1556042803000,
                        "date": "2019-04-23T18:06:43.000+0000",
                        "machineIdentifier": 8623287,
                        "processIdentifier": 4964,
                        "timeSecond": 1556042803
                    },
                    "title": "mycard",
                    "prokjectheading": "Building Temporary Pedestrain",
                    "projetctitle": "cableopeeatore",
                    "biddate": "12/02/2018",
                    "worktilte": "Cale",
                    "bestprice": 200.0,
                    "yourprice": 7000.0,
                    "projectstatzus": "under work"
                }
            ]
        };
    }

    // componentDidMount() {
    //     this.intervalId = setInterval(() => this.loadData(), 100);
    //     this.loadData(); // also load one immediately
    // }

    // loadData() {
    //     fetch(`http://localhost:9809/mycardmongodb`)
    //         .then(res => res.json())
    //         .then(json => this.setState({ data: json }));
    // }
    // componentWillUnmount() {
    //     clearInterval(this.intervalId);
    // }

    UPDATEPROJECTSTATUS() {

    }
    render() {
        return (
            <div >

                <Header />

                <div className="text-left"  >
                    <h1>My Bidds </h1>
                </div>
                <div>
                    <Row>
                        {this.state.data.map(el => (
                            <Col xs="12" sm="6" md="4"  >
                                <Card className="border-success" style={{ backgroundColor: 'white' }}>
                                    <CardHeader>
                                        <div className="text-right">
                                            <MDBBtn rounded color="info">{el.projectstatzus}</MDBBtn>
                                        </div>
                                        <div className="card-header-actions">
                                            <header>
                                                <h3 ><Link to="/DialogEdit">{el.prokjectheading}
                                                </Link></h3></header>
                                        </div>
                                    </CardHeader>
                                    <CardBody className="border-success">

                                        <table class="w3-table w3-striped">

                                            <tr>
                                                <td id="p">Project Title:</td>
                                                <td id="p"> {el.projetctitle}</td>
                                            </tr>
                                            <tr>
                                                <td id="p">Bid Date:</td>
                                                <td id="p">{el.biddate}</td>
                                            </tr>
                                            <tr>
                                                <td id="p">Work Title:</td>
                                                <td id="p">{el.worktilte}</td>
                                            </tr>
                                        </table>

                                    </CardBody>
                                    <CardFooter className="border-info">
                                        <div className='ui two buttons'>
                                            <MDBBtn rounded color="info">Approved</MDBBtn>
                                            <h>&nbsp;&nbsp;&nbsp;</h>
                                            <MDBBtn rounded color="danger">Decline</MDBBtn>
                                        </div>

                                        <span class="largefont">Best price: ${el.bestprice}</span>  <span class="largefont">your  price: ${el.yourprice}</span>

                                    </CardFooter>

                                </Card>
                            </Col>

                        ))}


                    </Row>
                </div>
                <Footer />
            </div>
        );
    }
}


export default MyCards;