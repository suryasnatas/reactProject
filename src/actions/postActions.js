/**
 * @author Suryasnata Nayak 
 */
import { SUCCESS_REGISTRATION, LOGIN_SUCCESS, AUTO_POPULATE_FIELDS_FROM_DB, USERNAME_ALREADY_EXISTS } from '../actions/constants';
import axios from 'axios';

/**
 * @param {*} formData 
 * Saves registration data in database
 */
export const fetchPostsWithRedux = (formData) => dispatch => {

    const URL = "http://localhost:8080/saveResgistrationDetails";

    axios.post(URL, formData)
        .then(response => {
            console.log(response.data)
            if (response.data === "registration success") {
                /**
               * @param {*} SUCCESS_REGISTRATION
               * @Location '../reducers/feature_registration/registration.js'
               */
                dispatch({
                    type: SUCCESS_REGISTRATION,
                    payload: "success"
                })
            }
            else {
                /**
            * @param {*} USERNAME_ALREADY_EXISTS
            * @Location '../reducers/feature_registration/registration.js'
            */
           console.log("I AM HERE")
                dispatch({
                    type: USERNAME_ALREADY_EXISTS,
                    payload: "username already exists"
                })
            }
        }
        );
}

export const validateUserDetail = (formData, email) => dispatch => {

    const URL = "http://localhost:8080/validateUserDetails";

    axios.post(URL, formData)
        .then(response => {
            if (response.status === 200) {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: email
                })
                dispatch({
                    type: AUTO_POPULATE_FIELDS_FROM_DB,
                    payload: response.data
                })
            }
        }
        );
}

export const updateUserDetails = (formData) => dispatch => {

    console.log(formData)
    const URL = "http://localhost:8080/updateUserDetails";

    axios.post(URL, formData)
        .then(response => {
            /**
              * @case {*} SUCCESS_UPDATION
              * @Location '../reducers/feature_profile/profile.js'
              */
            dispatch({
                type: 'UPDATE_PROFILE_SUCCESS',
                payload: response.data
            })
        }
        );

    
}