
/**
 * @author Suryasnata Nayak
 * This is a Header Component
 * predefined libraries and Components
 */
import React from 'react';
import { Segment, Button, Icon, MenuItem, Header, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import SideNav from 'react-simple-sidenav';
import { connect } from 'react-redux';
import { LOGOUT } from '../../actions/constants';

class HeaderPage extends React.Component {

    state = {
        showNav: false
    }

    render() {
        return (
            <div>
                <Segment inverted vertical style={{ backgroundColor: "purple" }}>

                    <Grid divided inverted stackable>

                        <Grid.Row width={10}>

                            <Grid.Column width={2} style={{ marginRight: "30px", float: "left" }}>
                                <Button icon onClick={() => this.setState({ showNav: true })} style={{ marginLeft: "40px", backgroundColor: "purple" }} >
                                    <Icon name='align justify' style={{ color: "white" }} />
                                </Button>

                                <SideNav
                                    showNav={this.state.showNav}
                                    onHideNav={() => this.setState({ showNav: false })}
                                    title={<div style={{ height: "40px" }}>Navigate</div>}
                                    titleStyle={{ backgroundColor: 'purple' }}
                                    navStyle={{ width: "250px" }}
                                    items={[
                                        <Link to='/profile' style={{ float: "left" }}>
                                            <MenuItem style={{ color: "purple" }}>MyProfile</MenuItem>
                                        </Link>
                                    ]} />
                            </Grid.Column>

                            <Grid.Column width={1} style={{ marginTop: "10px" }}>
                                <Link to="/index"> <Header inverted as='h4' content='Home' /></Link>
                            </Grid.Column>

                            {/* <Grid.Column width={1} style={{ marginTop: "10px" }}>
                                <Header inverted as='h4' content='Work' />
                            </Grid.Column> */}

                            <Grid.Column width={1} style={{ marginTop: "10px" }}>
                                <Header inverted as='h4' content='Contact us' />
                            </Grid.Column>

                            {
                                this.props.isLoggedIn ? (
                                    <Grid.Column width={1} style={{ marginTop: "10px" }}>
                                        <Link to="myDashboard"> <Header inverted as='h4' content='DashBoard' />
                                        </Link>
                                    </Grid.Column>
                                ) : (<div></div>)
                            }
                            {
                                this.props.isLoggedIn ? (
                                    <Grid.Column width={1} style={{ marginTop: "10px" }}>
                                        <Link to="bid"> <Header inverted as='h4' content='MyBids' />
                                        </Link>
                                    </Grid.Column>
                                ) : (<div></div>)
                            }
                            {
                                this.props.isLoggedIn ? (

                                    <Grid.Column width={1} style={{ marginTop: "10px" }}>
                                        <Link to="myProjects"> <Header inverted as='h4' content='MyProjects' />
                                        </Link>
                                    </Grid.Column>
                                ) : (<div></div>)
                            }
                            {
                                !this.props.isLoggedIn ? (
                                    <Grid.Column style={{ marginLeft: "800px" }} width={3}>
                                        <Button.Group>
                                            <Link to="/login" ><Button positive inverted={true} style={{ backgroundColor: "rgb(87, 87, 238)" }}>Log in</Button></Link>
                                            <Button.Or />
                                            <a href="/register"><Button inverted={true} style={{ marginLeft: '0.5em' }}>Sign Up</Button></a>
                                        </Button.Group>

                                    </Grid.Column>
                                ) : (
                                        <Grid.Column style={{ marginLeft: "420px" }} width={3}>
                                            <Button.Group>
                                                <Button onClick={this.props.logOut} positive inverted={true} style={{ backgroundColor: "rgb(87, 87, 238)" }}>LogOut</Button>
                                            </Button.Group>
                                        </Grid.Column>
                                    )
                            }

                        </Grid.Row>
                    </Grid>
                </Segment >
            </div >
        );

    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.loginReducer.isLoggedIn,
        logoutFlag: state.loginReducer.logoutFlag
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logOut: () => dispatch({ type: LOGOUT }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderPage)