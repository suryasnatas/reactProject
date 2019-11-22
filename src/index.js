/**
 * @author Suryasnata Nayak
 * predefined libraries and Components
 */
import * as serviceWorker from './serviceWorker';
import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import "semantic-ui-css/semantic.min.css";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import {store, persistor} from './store';
import { PersistGate } from 'redux-persist/integration/react';

/**
 * User defined Components
 */
import Registration from "./feature/registration/Registration";
import Login from "./feature/login/Login"
import Frontpage from './components/frontPage/FrontPage';
import Chart from '../src/feature/dashboard/chart'
import UserDashboard from './feature/dashboard/userDashboard/UserDashboard';
import MyBids from './feature/biddingPage/MyBids';
import Milestone from './feature/milestoneBar/Milestone';
import MyProjects from './feature/myProjects/MyProjects';
import MyCards from './feature/myCards/MyCards';
import Bidding from './feature/biddingPage/Bidding';
import LandingPage from './feature/landingPage/LandingPage';
import MyDashBoard from './feature/myDashBoard/MyDashBoard';
import Profile from './feature/profile/Profile';


class Root extends React.Component {

    render() {
        return (
            /**
             * Creating routes for navigation panel
             */
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Registration} />
                <Route path="/index" component={Frontpage} />
                <Route path="/dash" component={Chart} />
                <Route path="/userdash" component={UserDashboard} />
                <Route path="/myBids" component={MyBids} />
                <Route path="/mile" component={Milestone} />
                <Route path="/myProjects" component={MyProjects} />
                <Route path="/cards" component={MyCards} />
                <Route path="/bidding" component={Bidding} />
                <Route path="/landing" component={LandingPage} />
                <Route path="/myDashboard" component={MyDashBoard} />
                <Route path="/profile" component={Profile} />
                
            </Switch>
        );
    }
}

const RootWithAuth = withRouter(Root);

/**
 * Rendering DOM
 * @component Provider
 * @Component Router
 * @const RootWithAuth
 */
ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <Router>
                <RootWithAuth />
            </Router>
        </PersistGate>
    </Provider>,
    document.getElementById("root")
);

serviceWorker.unregister();