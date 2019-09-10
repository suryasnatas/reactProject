import { combineReducers } from 'redux';
import bidReducer from './feature_biddingPage/Bid';
import biddingReducer from './feature_biddingPage/Bidding';
import registrationReducer from './feature_registration/registration';
import loginReducer from './feature_login/login';
import myProjectsReducer from './feature_myProjects/MyProjects';
import myDashBoardReducer from './feature_myDashBoard/MyDashBoard';
import reducer_profileUpdate from './feature_profile/profile';
/**
 * Combining reducers
 */
export default combineReducers({
    bidReducer: bidReducer,
    biddingReducer: biddingReducer,
    registrationReducer: registrationReducer,
    loginReducer: loginReducer,
    myProjectsReducer: myProjectsReducer,
    myDashBoardReducer: myDashBoardReducer,
    reducer_profileUpdate: reducer_profileUpdate
});