/**
 * @author Suryasnata Nayak 
 */
import { UPDATE_BIDDING_LIST, UPDATE_ALL_PROJECT_LIST, UPDATE_PROJECT_LIST, USERNAME_OR_EMAIL_ALREADY_EXISTS, EMAIL_ALREADY_EXISTS } from '../actions/constants'
import axios from 'axios';
//import { browserHistory } from 'react-router';
// GET MyBids data from database
export const getDataFromMyBids = (email) => dispatch => {

    /**
     * @param {*} URL
     * It's a REST endpoint that gets data from DB: myBids
     */
    const URL = `http://localhost:8080/getMyBids/`+ email ;

    axios.get(URL)
        .then(res => {

            /**
             * @param UPDATE_BIDDING_LIST
             * @Location '../reducers/feature_biddingPage/Bid.js'
             */
            dispatch({
                type: UPDATE_BIDDING_LIST,
                payload: res.data
            })
        }
        );
}

// GET MyProjects data from database
export const getDataFromMyProjects = () => dispatch => {

    /**
     * @param {*} URL
     * It's a REST endpoint that gets data from DB: myProjects
     */
    const URL = `http://localhost:8080/myprojectdb`;

    axios.get(URL)
        .then(res => {

            /**
             * @param UPDATE_PROJECT_LIST
             * @Location '../reducers/feature_myProjects/MyProjects.js'
             */
            dispatch({
                type: UPDATE_PROJECT_LIST,
                payload: res.data
            })
        }
        );
}

// GET MyProjects data from database
export const getDataFromAllProjects = () => dispatch => {

    /**
     * @param {*} URL
     * It's a REST endpoint that gets data from DB: myProjects
     */
    const URL = `http://localhost:8080/getAllProjects`;

    axios.get(URL)
        .then(res => {
            /**
             * @param UPDATE_ALL_PROJECT_LIST
             * @Location '../reducers/feature_myDashBoard/MyDashBoard.js'
             */
            dispatch({
                type: UPDATE_ALL_PROJECT_LIST,
                payload: res.data
            })
        }
        );
}

// GET Particular Project data from database
export const getProject = (projectId) => dispatch => {
    console.log("project id is");
    /**
     * @param {*} URL
     * It's a REST endpoint that gets data from DB: myProjects
     */
    const URL = 'http://localhost:8080/getProject/' + projectId;

    axios.get(URL)
        .then(res => {
            /**
             * @param UPDATE_PROJECT_DETAILS
             * @Location '../reducers/feature_myDashBoard/MyDashBoard.js'
             */
            console.log(res.data);
            dispatch({
                type: "UPDATE_PROJECT_DETAILS",
                payload: res.data
            })
        }
        );
}

export const validateUsername = (usernameOrEmail, username_email) => dispatch => {

    /**
     * @param {*} URL
     * It's a REST endpoint that gets data from DB: myProjects
     */
    const URL = 'http://localhost:8080/validateUsername/' + usernameOrEmail + "/" + username_email;

    axios.get(URL)
        .then(res => {
            /**
             * @param USERNAME_OR_EMAIL_ALREADY_EXISTS
             * @Location '../reducers/feature_myProjects/MyProjects.js'
             */
            dispatch({
                type: USERNAME_OR_EMAIL_ALREADY_EXISTS,
                payload: res.data
            })
        }
        );
}


export const validateEmail = (email) => dispatch => {

    /**
     * @param {*} URL
     * It's a REST endpoint that gets data from DB: myProjects
     */

    console.log("valid")
    const URL = 'http://localhost:8080/validateEmail/' + email;

    console.log("emailV")
    axios.get(URL)
        .then(res => {
            /**
             * @param EMAIL_ALREADY_EXISTS
             * @Location '../reducers/feature_myProjects/MyProjects.js'
             */
            dispatch({
                type: EMAIL_ALREADY_EXISTS,
                payload: res.data
            })
        }
        );
}


export const proceedToUpdateMyBids = (projectId, finalBidPrice) => dispatch => {

    /**
     * @param {*} URL
     * It's a REST endpoint that gets data from DB: myProjects
     */

    console.log("valid")
    const URL = 'http://localhost:8080/updateMyBids/' + projectId + "/" + finalBidPrice;

    console.log("emailV")
    axios.get(URL)
        .then(res => {
            /**
             * @param EMAIL_ALREADY_EXISTS
             * @Location '../reducers/feature_myProjects/MyProjects.js'
             */
            dispatch({
                type: EMAIL_ALREADY_EXISTS,
                payload: res.data
            })
        }
        );
}


export const getOtherSupplierBids = (email) => dispatch => {

    /**
     * @param {*} URL
     * It's a REST endpoint that gets data from DB: myProjects
     */

    console.log("valid")
    const URL = 'http://localhost:8080/getOtherSupplierBids/'+ email;

    console.log("emailV")
    axios.get(URL)
        .then(res => {
            /**
             * @param OTHER_SUPPLIERS
             * @Location '../reducers/feature_myProjects/MyProjects.js'
             */
            console.log(res.data);

            dispatch({
                type: "OTHER_SUPPLIERS",
                payload: res.data
            })
        }
        );
}

