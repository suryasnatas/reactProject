/**
 * @author Suryasnata Nayak
 * reducer
 */
//import { LOGOUT, HANDLE_UPDATE_LIST_SELECT, HANDLE_COUNTRY_SUGGEST, SET_UPDATE_USERNAME, SET_UPDATE_ADDRESS, SET_UPDATE_POST_CODE, SET_UPDATE_COUNTRY, SET_UPDATE_CITY, SET_UPDATE_PASSWORD, SET_UPDATE_EMAIL, SET_UPDATE_PHONE_NUMBER } from '../../actions/constants';
import { LOGOUT } from '../../actions/constants';
import countries from '../../components/autocomplete/countries';
import { AUTO_POPULATE_FIELDS_FROM_DB } from '../../actions/constants'

const initialState = {
    id: '',
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
    phoneNumber: ''

}

const reducer_profileUpdate = (state = initialState, action) => {

    switch (action.type) {

        case 'UPDATE_PROFILE_SUCCESS':
            return { ...state, success: action.payload }

        case AUTO_POPULATE_FIELDS_FROM_DB:
            var newState = {
                ...state,
                id: action.payload.id,
                businessFlag: action.payload.businessFlag,
                supplierFlag: action.payload.supplierFlag,
                supplier: '',
                business: '',
                isBusinessSliderEnabled: false,
                isSupplierSliderEnabled: false,
                suggestions: [],
                count: 0,
                success: '',
                username: action.payload.username,
                address: action.payload.address,
                postCode: action.payload.postCode,
                country: action.payload.country,
                city: action.payload.city,
                password: action.payload.password,
                email: action.payload.email,
                phoneNumber: action.payload.phoneNumber
            };
            console.log(newState)

            console.log(newState)
            return newState

        case 'HANDLE_UPDATE_COUNTRY_SUGGEST':
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

        case 'HANDLE_UPDATE_LIST_SELECT':
            return { ...state, country: action.value, suggestions: [] };

        case 'SET_UPDATE_USERNAME':
            return { ...state, username: action.payload }

        case 'SET_UPDATE_ADDRESS':
            return { ...state, address: action.payload }

        case 'SET_UPDATE_POST_CODE':
            return { ...state, postCode: action.payload }

        case 'SET_UPDATE_COUNTRY':
            return { ...state, country: action.payload }

        case 'SET_UPDATE_CITY':
            return { ...state, city: action.payload }

        case 'SET_UPDATE_PASSWORD':
            return { ...state, password: action.payload }

        case 'SET_UPDATE_EMAIL':
            return { ...state, email: action.payload }

        case 'SET_UPDATE_PHONE_NUMBER':
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

export default reducer_profileUpdate;