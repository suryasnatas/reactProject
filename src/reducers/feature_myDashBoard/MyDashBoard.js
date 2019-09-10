/**
 * @author Suryasnata Nayak
 * reducer
 */
import { UPDATE_ALL_PROJECT_LIST } from '../../actions/constants';

const initialState = {
    data: [],
}

const reducer_allProjects = (state = initialState, action) => {

    switch (action.type) {

        case UPDATE_ALL_PROJECT_LIST:
            return { ...state, data: action.payload }

        default:
            return state;
    }
}

export default reducer_allProjects;