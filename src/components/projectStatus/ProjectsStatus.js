import React from 'react';
import Circle from 'react-circle';
import './index.css';
import { Card, Row, Col } from 'reactstrap';
class LandingPage extends React.Component {

    render() {

        return (
                <Row style={{marginTop:"40px"}}>
                    <Col sm="8">
                        <Card className="bg-custom">
                            <table style={{ marginLeft: "32px" }}>
                                <tbody>
                                    <tr>
                                        <td style={{ paddingRight: "40px" }}>
                                            <Circle
                                                animate={true} // Boolean: Animated/Static progress
                                                responsive={true}
                                                animationDuration="1s" //String: Length of animation
                                                size={120} // Number: Defines the size of the circle.
                                                lineWidth={20} // Number: Defines the thickness of the circle's stroke.
                                                progress={100} // Number: Update to change the progress and percentage.
                                                progressColor="white"  // String: Color of "progress" portion of circle.
                                                bgColor="whitesmoke" // String: Color of "empty" portion of circle.
                                                textColor="white" // String: Color of percentage text color.
                                                textStyle={{
                                                    font: 'bold 5rem Helvetica, Arial, sans-serif' // CSSProperties: Custom styling for percentage.
                                                }}
                                                percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                                                roundedStroke={true} // Boolean: Rounded/Flat line ends
                                                showPercentage={true} // Boolean: Show/hide percentage.
                                                showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol
                                            />
                                        </td>
                                        <td style={{ paddingRight: "40px" }}>
                                            <Circle
                                                animate={true} // Boolean: Animated/Static progress
                                                animationDuration="1s" //String: Length of animation
                                                responsive={true}
                                                size={120} // Number: Defines the size of the circle.
                                                lineWidth={20} // Number: Defines the thickness of the circle's stroke.
                                                progress={90} // Number: Update to change the progress and percentage.
                                                progressColor="#7DBD7D"  // String: Color of "progress" portion of circle.
                                                bgColor="whitesmoke" // String: Color of "empty" portion of circle.
                                                textColor="white" // String: Color of percentage text color.
                                                textStyle={{
                                                    font: 'bold 5rem Helvetica, Arial, sans-serif' // CSSProperties: Custom styling for percentage.
                                                }}
                                                percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                                                roundedStroke={true} // Boolean: Rounded/Flat line ends
                                                showPercentage={true} // Boolean: Show/hide percentage.
                                                showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol

                                            />
                                        </td>
                                        <td style={{ paddingRight: "40px" }}>
                                            <Circle
                                                responsive={true}
                                                animate={true} // Boolean: Animated/Static progress
                                                animationDuration="1s" //String: Length of animation
                                                size={120} // Number: Defines the size of the circle.
                                                lineWidth={20} // Number: Defines the thickness of the circle's stroke.
                                                progress={40} // Number: Update to change the progress and percentage.
                                                progressColor="#FFC55C"  // String: Color of "progress" portion of circle.
                                                bgColor="whitesmoke" // String: Color of "empty" portion of circle.
                                                textColor="white" // String: Color of percentage text color.
                                                textStyle={{
                                                    font: 'bold 5rem Helvetica, Arial, sans-serif' // CSSProperties: Custom styling for percentage.
                                                }}
                                                percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                                                roundedStroke={true} // Boolean: Rounded/Flat line ends
                                                showPercentage={true} // Boolean: Show/hide percentage.
                                                showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol
                                            />
                                        </td>
                                        <td style={{ paddingRight: "40px" }}>
                                            <Circle
                                                responsive={true}
                                                animate={true} // Boolean: Animated/Static progress
                                                animationDuration="1s" //String: Length of animation
                                                size={120} // Number: Defines the size of the circle.
                                                lineWidth={20} // Number: Defines the thickness of the circle's stroke.
                                                progress={55} // Number: Update to change the progress and percentage.
                                                progressColor="#FF5C5C"  // String: Color of "progress" portion of circle.
                                                bgColor="whitesmoke" // String: Color of "empty" portion of circle.
                                                textColor="white" // String: Color of percentage text color.
                                                textStyle={{
                                                    font: 'bold 5rem Helvetica, Arial, sans-serif' // CSSProperties: Custom styling for percentage.
                                                }}
                                                percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                                                roundedStroke={true} // Boolean: Rounded/Flat line ends
                                                showPercentage={true} // Boolean: Show/hide percentage.
                                                showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol
                                            />
                                        </td>
                                    </tr>
                                    <tr style={{ color: "white" }}>
                                        <td><b>&ensp;&ensp;Total Projects</b></td>
                                        <td><b>&emsp;&emsp;In Progress</b></td>
                                        <td><b>&emsp;&emsp;Not Started</b></td>
                                        <td><b>&emsp;&emsp;&emsp;In Risk</b></td>
                                    </tr>
                                </tbody>
                            </table>
                        </Card>
                    </Col>
                </Row>

        )
    }
}

export default LandingPage;