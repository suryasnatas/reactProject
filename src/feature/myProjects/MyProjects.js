

import React, { Component } from "react";
import { Row, Col, CardBody, Container } from 'reactstrap';
import { Card, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actionCreator from '../../actions/getActions';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';


class MyProjects extends Component {

  componentDidMount() {
    // Fetching data from MyProjects Document
    this.props.getDataFromMyProjects();
  }

  render() {

    if (this.props.isLoggedIn === false) {
      return <Redirect to='' />
    }

    return (
      <div style={{ backgroundColor: "white" }}>

        <Header />

        <Container style={{ marginTop: "10px", marginBottom: "10px" }}>

          <Card style={{ backgroundColor: '#eee', width: "100%" }}>

            <Row>
              {
                this.props.data.map((el, key) => (

                  <Col key={key} sm="6">

                    <Card link raised={true} key={key} style={{ width: "94%", backgroundColor: 'white', padding: "10x", marginRight: "10px", marginLeft: "10px", marginTop: "10px", marginBottom: "10px" }}>

                      <Card.Content>
                        <Card.Header>
                          {
                            el.status === "In Progress" ? (<Label color="orange" ribbon="right" size="large">{el.status}</Label>) : ("")
                          }
                          {
                            el.status === "In Risk" ? (<Label color="red" ribbon="right" size="large">{el.status}</Label>) : ("")
                          }
                          {
                            el.status === "success" ? (<Label color="green" ribbon="right" size="large">{el.status}</Label>) : ("")
                          }
                          {
                            el.status === "Not Started" ? (<Label color="grey" ribbon="right" size="large">{el.status}</Label>) : ("")
                          }
                        </Card.Header>

                        <div className="card-header-actions">
                          <header>
                            <h3 ><Link to="/mile">{el.projetcname}
                            </Link></h3></header>
                        </div>


                        <CardBody className="border-success">

                          <table className="w3-table w3-striped">
                            <tbody>
                              <tr>
                                <td id="p">Project Title:</td>
                                <td id="p"> {el.projectdeatils}</td>
                              </tr>
                              <tr>
                                <td id="p">Bid Date:</td>
                                <td id="p">{el.date}</td>
                              </tr>
                              <tr>
                                <td id="p">work Title:</td>
                                <td id="p">{el.worktitle}</td>
                              </tr>
                            </tbody>
                          </table>
                        </CardBody>

                        <div className="card-footer bg-white no-padding-left no-padding-right">
                          <button className="btn btn-outline-info btn-sm">Address:<i className="fa fa-map-marker mr-2"></i>{el.address}</button>
                        </div>
                      </Card.Content>
                    </Card>
                  </Col>
                ))}

            </Row>
            <Row style={{ marginTop: "20px" }}>
              <Col sm={{ offset: 5 }}>
                
                <Pagination aria-label="Page navigation example">

                  <PaginationItem disabled>
                    <PaginationLink previous href="#" />
                  </PaginationItem>
                  <PaginationItem active={true}>
                    <PaginationLink href="#">1</PaginationLink>
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
                  <PaginationItem>
                    <PaginationLink next href="#" />
                  </PaginationItem>
                </Pagination>
              </Col>
            </Row>
          </Card>
        </Container>

        <Footer />
      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.loginReducer.isLoggedIn,
    data: state.myProjectsReducer.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getDataFromMyProjects: () => dispatch(actionCreator.getDataFromMyProjects())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyProjects);