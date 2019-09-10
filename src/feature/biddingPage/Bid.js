/**
 * @author Suryasnata Nayak
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Input } from 'semantic-ui-react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer';
import '../../styles/Bid.css';
import { bidCard, bidCardList, nextPage, cardHeader, recomCard, cardMeta, nextPageDisabled } from '../../styles/inlineStyles/Bid';
import { connect } from 'react-redux';
import { HANDLE_NEXT, HANDLE_RESET, HANDLE_PREVIOUS, TOGGLE_MODAL, YOUR_BID } from '../../actions/constants';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import * as actionCreator from "../../actions/getActions";
import { Redirect } from 'react-router-dom'

class Bid extends Component {

    componentDidMount() {
        // Fetching data from MyBids Document
        this.props.getDataFromMyBids();
    }

    state = {
        tempBid: "",
    }

    handleSubmit = () => {
        this.props.yourBid(this.state.tempBid)
    }

    handleChange = (event) => {
        this.setState({
            tempBid: event.target.value
        })
    }

    render() {
        const { begin, end } = this.props;
        const pageNumbers = Math.ceil((this.props.posts.length) / 9);

        if (this.props.isLoggedIn === false) {
            return <Redirect to='' />
        }

        return (
            <div style={{ backgroundColor: "white" }}>

                {/**
                  * Header Nav
                  */}
                <Header />

                <div className="container containerClass">

                    <Card.Group>

                        {/**
                          * This is card where bidding can be done
                          */}
                        <Card raised={true} style={bidCard}>
                            <br />
                            {
                                this.props.posts.slice(begin, end).length !== 0
                                    ?
                                    this.props.posts.slice(begin, end).map((post, index) => {

                                        /**
                                         * Setting index as unique key from JSON/DB
                                         * because each time we click on next page
                                         * it will set index again to 0
                                         */
                                        index = post.key;

                                        return (
                                            <Card link raised={true} style={bidCardList} key={index}>

                                                <Card.Content>

                                                    {/* Right */}
                                                    <Button
                                                        color="blue"
                                                        className="card-button"
                                                        size="large"
                                                        onClick={() => this.props.toggleModal(post.title, post.basePrice, index, post.location)}>
                                                        Rebid
                                                    </Button>

                                                    {/* Middle */}
                                                    <div className="card-button" style={{ color: "blue", borderRadius: "2px", background: "white", marginLeft: "10px", marginRight: "10px" }}>
                                                        <table>
                                                            <tbody>
                                                                <tr><td><b style={{ color: "black" }}>your Bid</b></td></tr>
                                                                <tr><td><b style={{ marginLeft: "6px" }}>{this.props.posts[index].yourBid}</b></td></tr>
                                                            </tbody>
                                                        </table>
                                                    </div>

                                                    {/* left */}
                                                    <div className="card-button" style={{ borderRadius: "2px", background: "rgb(220,220,220)" }}>
                                                        <table>
                                                            <tbody>
                                                                <tr><td>Base Price</td></tr>
                                                                <tr><td><center>{post.basePrice}</center></td></tr>
                                                            </tbody>
                                                        </table>
                                                    </div>

                                                    <Card.Header>{post.title}</Card.Header>

                                                    <Card.Meta>
                                                        <span className='ends'>Ends:<span style={{ color: "black" }}>{post.ends}</span></span>&nbsp;&nbsp;
                                                        <span className='postedBy'>Posted by:<span style={{ color: "black" }}>{post.postedBy}</span></span>&nbsp;&nbsp;
                                                        <span className='location'>Location:<span style={{ color: "black" }}>{post.location}</span></span>
                                                    </Card.Meta>

                                                </Card.Content>
                                            </Card>
                                        )
                                    }) : (this.props.reset)
                            }
                            <div>
                                <p style={{ bottom: "0", position: "absolute", marginLeft: "47%" }}>Page {this.props.page}</p>
                            </div>

                            <div style={{ marginLeft: "84%" }} >
                                {
                                    pageNumbers !== this.props.page ?
                                        (<p style={nextPage} onClick={this.props.handleNextPage}> Next Page...{pageNumbers}&gt;&gt;</p>)
                                        :
                                        (<p style={nextPageDisabled}> Next Page...{Math.ceil((this.props.posts.length) / 9)}&gt;&gt;</p>)
                                }

                            </div>
                            <div>
                                {
                                    this.props.page !== 1 ?
                                        (<p style={nextPage} onClick={this.props.handlePreviouspage}> &lt;&lt;Previous Page</p>)
                                        :
                                        (<p style={nextPageDisabled}> &lt;&lt;Previous Page</p>)
                                }
                            </div>

                        </Card>

                        {/**
                          * This is card where recommendation is visible
                          */}
                        <Card style={recomCard}>

                            <Card.Header
                                style={cardHeader}>
                                <b><h3>Recommendations for you</h3> </b>
                            </Card.Header>

                            <Card.Content>
                                {
                                    this.props.recommendations.map((rec, index) => {
                                        return (
                                            <Card link raised={true} style={{ width: "100%" }} key={index}>

                                                <Card.Content>
                                                    <Card.Description><Link to="">{rec.title}</Link></Card.Description>

                                                    <Card.Meta>
                                                        <span>Location:<span style={cardMeta}>{rec.location}</span></span>
                                                        <br />
                                                        <span>Posted by:<span style={cardMeta}>{rec.PostedBy}</span></span>
                                                        <br />
                                                        <span>End Date:<span style={cardMeta}>{rec.ends}</span></span>
                                                    </Card.Meta>
                                                </Card.Content>

                                            </Card>
                                        )
                                    })
                                }

                            </Card.Content>

                            <div className="next-page">
                                <p style={nextPage}> Next Page>></p>
                            </div>

                        </Card>
                    </Card.Group>
                    <br />

                    {/**
                      * Modal
                      */}
                    <Modal isOpen={this.props.modalIsopen}>

                        <ModalHeader>
                            <span style={{ marginLeft: "220px", float: "right", cursor: "pointer" }} onClick={() => this.props.toggleModal(this.props.title)}>X</span>
                            <b style={{ fontSize: "20px", padding: "5px" }}>{this.props.title}</b><br />
                            <i className="fa fa-map-marker" style={{ fontSize: "24px", padding: "5px" }}></i>
                            <span style={{ fontSize: "18px", color: "gray", marginLeft: "4px", padding: "3px" }}>{this.props.location}</span>
                        </ModalHeader>

                        <ModalBody>
                            <h5 style={{ fontSize: "15px" }}>Base Price:&nbsp;<b style={{ color: "green" }}>{this.props.basePrice}</b></h5>
                            <span style={{ fontSize: "15px", fontWeight: "bold", marginRight: "5px" }}>Bid:</span>
                            <Input placeholder='Enter new Bid...' onChange={this.handleChange} />
                        </ModalBody>

                        <ModalFooter>
                            <Button color="red" onClick={() => this.props.toggleModal(this.props.title)}>Close</Button>
                            <Button color="blue" onClick={this.handleSubmit}>Bid</Button>
                        </ModalFooter>

                    </Modal>
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.bidReducer.posts,
        recommendations: state.bidReducer.recommendations,
        begin: state.bidReducer.begin,
        end: state.bidReducer.end,
        page: state.bidReducer.page,
        visible: state.bidReducer.visible,
        title: state.bidReducer.title,
        modalIsopen: state.bidReducer.modalIsopen,
        basePrice: state.bidReducer.basePrice,
        index: state.bidReducer.index,
        location: state.bidReducer.location,
        isLoggedIn: state.loginReducer.isLoggedIn,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleNextPage: () => dispatch({ type: HANDLE_NEXT }),
        handlePreviouspage: () => dispatch({ type: HANDLE_PREVIOUS }),
        reset: () => dispatch({ type: HANDLE_RESET }),
        toggleModal: (title, basePrice, index, location) => dispatch({ type: TOGGLE_MODAL, title: title, basePrice: basePrice, index: index, location: location }),
        yourBid: (yourBid) => dispatch({ type: YOUR_BID, yourBid: yourBid }),
        getDataFromMyBids: () => dispatch(actionCreator.getDataFromMyBids())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bid);