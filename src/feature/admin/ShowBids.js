/**
 * @author Suryasnata Nayak
 * predefined libraries and Components
 */
import React from 'react';
import { Grid, Segment, Button, Card } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { recomCard, cardMeta } from '../../styles/inlineStyles/Bid';
import * as getActionCreator from '../../actions/getActions'

/**
 * User defined Components
 * @Component Footer
 * @Component Header
 */
import Footer from '../../components/footer/Footer';
import TopHeader from '../../components/header/Header';

class ShowBids extends React.Component {


    state = {
        bids: [
            { user: "Tanuj", bid: 234, project: "Fiber expansion in Derby" },
            { user: "Tanuj", bid: 234, project: "Copper Replacement for Shefield" },
            { user: "Tanuj", bid: 234, project: "Site reinstatement work for Tower Hamlets" },
            { user: "Tanuj", bid: 234, project: "Excavation work in Adestral Park" },
            { user: "Tanuj", bid: 234, project: "Building temporary pedestrain walkway in southampton" }
        ]
    }

    componentDidMount(){
        this.props.getAllBids()
    }

    render() {

        if (this.props.isLoggedIn === false) {
            return <Redirect to='' />
        }
        if (this.props.email !== 'suryasnata.2@gmail.com') {
            return <Redirect to='' />
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
                        <Segment stacked>
                            {/**
                          * This is card where recommendation is visible
                          */}
                            <Card style={recomCard}>

                                <Card.Header>
                                    <b><h3>Bids by All suppliers</h3> </b>
                                </Card.Header>

                                <Card.Content>
                                    {
                                        this.props.allbids.map((bid, index) => {
                                            return (
                                                <Card link raised={true} style={{ width: "100%" }} key={index}>

                                                    <Card.Content>
                                                        <span><b>Supplier:&nbsp;</b><span style={cardMeta}>{bid.email}</span></span>
                                                        <br />
                                                        <span><b>Bid Price:&nbsp;</b><span style={cardMeta}>{bid.yourBid}</span></span>
                                                        <br />
                                                        <span><b>Project:&nbsp;</b><span style={cardMeta}>{bid.title}</span></span>
                                                    </Card.Content>

                                                    <Button.Group>
                                                        <Button
                                                            color="green"
                                                            size="large">
                                                            Accept
                                                   </Button>

                                                        <Button
                                                            color="red"
                                                            size="large">
                                                            Reject
                                                      </Button>
                                                    </Button.Group>

                                                </Card>
                                            )
                                        })
                                    }

                                </Card.Content>

                            </Card>


                        </Segment>



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
        email: state.loginReducer.email,
        allbids: state.showBids.allbids
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllBids: () => dispatch(getActionCreator.getAllBids()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowBids);