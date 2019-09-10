/**
 * @author Suryasnata Nayak
 * reducer
 */
import { UPDATE_PROJECT_LIST } from '../../actions/constants';

const initialState = {
    data: [],
}

const reducer_myProjects = (state = initialState, action) => {

    switch (action.type) {

        case UPDATE_PROJECT_LIST:
            return { ...state, data: action.payload }

        default:
            return state;
    }
}

export default reducer_myProjects;