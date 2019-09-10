/**
 * @author Suryasnata Nayak
 * reducer
 */
import { LOGIN_SUCCESS, LOGOUT } from '../../actions/constants';

const initialState = {
    isLoggedIn: false,
    logoutFlag:false,
    email: ''
}

const reducer_registration = (state = initialState, action) => {

    switch (action.type) {

        case LOGIN_SUCCESS:
            return { ...state, isLoggedIn: true, email: action.payload }

        case LOGOUT:
            return { ...state, isLoggedIn: false, logoutFlag:true }

        default:
            return state;
    }
}

export default reducer_registration;