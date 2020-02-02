/**
 * @author Suryasnata Nayak
 * reducer
 */
import { LOGIN_SUCCESS, LOGOUT, GENERATE_OTP, REMOVE_OTP } from '../../actions/constants';

const initialState = {
    isLoggedIn: false,
    logoutFlag: false,
    email: '',
    otp: ''
}

const reducer_registration = (state = initialState, action) => {

    switch (action.type) {

        case LOGIN_SUCCESS:
            return { ...state, isLoggedIn: true, email: action.payload }

        case LOGOUT:
            return { ...state, isLoggedIn: false, logoutFlag: true, email: '' }

        case GENERATE_OTP:
            return { ...state, otp: action.payload }

        case REMOVE_OTP:
            return { ...state, otp: '' }

        default:
            return state;
    }
}

export default reducer_registration;