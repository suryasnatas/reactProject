import React from 'react';
import { Card } from 'semantic-ui-react';
import { Container} from 'reactstrap';
import Circle from 'react-circle';
import '../../styles/App.css';


class DashBoard extends React.Component {


    render() {

        return (
            <Container>

                <Card className="bg-custom" style={{ width: "750px", height: "190px", marginTop: "40px" }}>
                    <table style={{ marginLeft: "55px", marginTop: "30px" }}>
                        <tbody>
                            <tr >
                                <td>
                                    <Circle
                                        animate={true} // Boolean: Animated/Static progress
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
                                <td>
                                    <Circle
                                        animate={true} // Boolean: Animated/Static progress
                                        animationDuration="1s" //String: Length of animation
                                        size={120} // Number: Defines the size of the circle.
                                        lineWidth={20} // Number: Defines the thickness of the circle's stroke.
                                        progress={100} // Number: Update to change the progress and percentage.
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
                                <td>
                                    <Circle
                                        animate={true} // Boolean: Animated/Static progress
                                        animationDuration="1s" //String: Length of animation
                                        size={120} // Number: Defines the size of the circle.
                                        lineWidth={20} // Number: Defines the thickness of the circle's stroke.
                                        progress={100} // Number: Update to change the progress and percentage.
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
                                <td>
                                    <Circle
                                        animate={true} // Boolean: Animated/Static progress
                                        animationDuration="1s" //String: Length of animation
                                        size={120} // Number: Defines the size of the circle.
                                        lineWidth={20} // Number: Defines the thickness of the circle's stroke.
                                        progress={100} // Number: Update to change the progress and percentage.
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
                                <td><b>&ensp;Total Projects</b></td>
                                <td><b>&emsp;In Progress</b></td>
                                <td><b>&emsp;Not Started</b></td>
                                <td><b>&emsp;&emsp;In Risk</b></td>
                            </tr>
                        </tbody>
                    </table>
                </Card>
            </Container>
        )
    }
}

export default DashBoard;

