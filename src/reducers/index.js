import { combineReducers } from 'redux';
import myBidsReducer from './feature_biddingPage/myBids';
import biddingReducer from './feature_biddingPage/Bidding';
import registrationReducer from './feature_registration/registration';
import loginReducer from './feature_login/login';
import myProjectsReducer from './feature_myProjects/MyProjects';
import myDashBoardReducer from './feature_myDashBoard/MyDashBoard';
import reducer_profileUpdate from './feature_profile/profile';
import showBids from './feature_showBids/showBids'
/**
 * Combining reducers
 */
export default combineReducers({
    myBidsReducer: myBidsReducer,
    biddingReducer: biddingReducer,
    registrationReducer: registrationReducer,
    loginReducer: loginReducer,
    myProjectsReducer: myProjectsReducer,
    myDashBoardReducer: myDashBoardReducer,
    reducer_profileUpdate: reducer_profileUpdate,
    showBids: showBids
});