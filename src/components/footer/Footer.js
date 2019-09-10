/**
 * @author Suryasnata Nayak
 * This is a footer component
 * predefined libraries and Components
 */
import React from 'react';
import { Grid, Segment, Header, Container, List } from 'semantic-ui-react';

class Footer extends React.Component {

    render() {
        return (
            <Segment inverted vertical style={{ padding: '4em 14em', backgroundColor:"purple" }}>

                <Container>
                    <Grid divided inverted stackable>
                        <Grid.Row width={10}>

                            <Grid.Column width={3}>
                                <Header inverted as='h4' content='ABOUT' />
                                <List link inverted>
                                    <List.Item as='a'>About us</List.Item>
                                    <List.Item as='a'>How it works</List.Item>
                                    <List.Item as='a'>Our Team</List.Item>
                                </List>

                            </Grid.Column>

                            <Grid.Column width={3}>
                                <Header inverted as='h4' content='PRESS' />
                                <List link inverted>
                                    <List.Item as='a'>In the News</List.Item>
                                    <List.Item as='a'>Press Release</List.Item>
                                    <List.Item as='a'>Testimonials</List.Item>
                                </List>
                            </Grid.Column>

                            <Grid.Column width={3}>
                                <Header inverted as='h4' content='HELP CENTRE' />
                                <List link inverted>
                                    <List.Item as='a'>Your Account</List.Item>
                                    <List.Item as='a'>Return Centre</List.Item>
                                    <List.Item as='a'>Help</List.Item>
                                </List>
                            </Grid.Column>

                            <Grid.Column width={3}>
                                <Header inverted as='h4' content='' />
                                <List link inverted>
                                    <List.Item as='a'>Privacy Policy</List.Item>
                                    <List.Item as='a'>Terms & Condition</List.Item>
                                    <List.Item as='a'>Contact</List.Item>
                                </List>
                            </Grid.Column>

                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        )
    }
}

export default Footer;