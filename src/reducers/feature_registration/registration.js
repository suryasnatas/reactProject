/**
 * @author Suryasnata Nayak
 * reducer
 */
import { LOGOUT, HANDLE_CHANGE_BUSINESS, HANDLE_CHANGE_SUPPLIER, HANDLE_LIST_SELECT, HANDLE_COUNTRY_SUGGEST, SET_USERNAME, SET_ADDRESS, SET_POST_CODE, SET_COUNTRY, SET_CITY, SET_PASSWORD, SET_EMAIL, SET_PHONE_NUMBER, USERNAME_ALREADY_EXISTS, EMAIL_ALREADY_EXISTS, USERNAME_OR_EMAIL_ALREADY_EXISTS } from '../../actions/constants';
import countries from '../../components/autocomplete/countries';
import { SUCCESS_REGISTRATION } from '../../actions/constants'

const initialState = {
    businessFlag: false,
    supplierFlag: false,
    supplier: '',
    business: '',
    isBusinessSliderEnabled: false,
    isSupplierSliderEnabled: false,
    suggestions: [],
    count: 0,
    success: '',
    username: '',
    address: '',
    postCode: '',
    country: '',
    city: '',
    password: '',
    email: '',
    phoneNumber: '',
    successEmail: '',
    successUsername: ''
}

const reducer_registration = (state = initialState, action) => {

    switch (action.type) {

        case SUCCESS_REGISTRATION:
            return { ...state, success: action.payload }

        case USERNAME_ALREADY_EXISTS:
            return { ...state, success: action.payload }

        case USERNAME_OR_EMAIL_ALREADY_EXISTS:
            return { ...state, successUsername: action.payload, successEmail:'' }

        case EMAIL_ALREADY_EXISTS:
            return { ...state, successEmail: action.payload, successUsername: '' }

        case "RESET_SUCCESS":
            console.log("here")
            return { ...state, success: '' }

        case HANDLE_CHANGE_BUSINESS:
            var newStateBusiness;

            if (state.businessFlag === false) {
                newStateBusiness = { ...state, businessFlag: true, isSupplierSliderEnabled: true }
                return newStateBusiness;
            } else {
                newStateBusiness = { ...state, businessFlag: false, isSupplierSliderEnabled: false };
                return newStateBusiness;
            }

        case HANDLE_CHANGE_SUPPLIER:
            var newStateSupplier;

            if (state.supplierFlag === false) {
                newStateSupplier = { ...state, supplierFlag: true, isBusinessSliderEnabled: true }
                return newStateSupplier;
            } else {
                newStateSupplier = { ...state, supplierFlag: false, isBusinessSliderEnabled: false };
                return newStateSupplier;
            }

        case HANDLE_COUNTRY_SUGGEST:
            const value = action.value;

            if (value.length > 0) {

                state.count++;
                state.suggestions = countries;

                const regex = new RegExp(`^${value}`, 'i');
                var newSuggestions = state.suggestions.sort().filter(item => regex.test(item));

                return { ...state, country: value, suggestions: newSuggestions };
            }
            else if (value.length === 0 && state.count > 0) {
                return { ...state, country: value, suggestions: [] };
            }
            else {
                return state
            }

        case HANDLE_LIST_SELECT:
            return { ...state, country: action.value, suggestions: [] };

        case SET_USERNAME:
            return { ...state, username: action.payload }

        case SET_ADDRESS:
            return { ...state, address: action.payload }

        case SET_POST_CODE:
            return { ...state, postCode: action.payload }

        case SET_COUNTRY:
            return { ...state, country: action.payload }

        case SET_CITY:
            return { ...state, city: action.payload }

        case SET_PASSWORD:
            return { ...state, password: action.payload }

        case SET_EMAIL:
            return { ...state, email: action.payload }

        case SET_PHONE_NUMBER:
            return { ...state, phoneNumber: action.payload }

        case LOGOUT:
            return {
                ...state, businessFlag: false,
                supplierFlag: false,
                supplier: '',
                business: '',
                isBusinessSliderEnabled: false,
                isSupplierSliderEnabled: false,
                suggestions: [],
                count: 0,
                success: '',
                username: '',
                address: '',
                postCode: '',
                country: '',
                city: '',
                password: '',
                email: '',
                phoneNumber: ''
            }

        default:
            return state;
    }
}

export default reducer_registration;