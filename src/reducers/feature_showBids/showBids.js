/**
 * @author Suryasnata Nayak
 * reducer
 */

const initialState = {
    allbids: []
}

const getAllBids = (state = initialState, action) => {

    switch (action.type) {

        case "GET_ALL_BIDS":
            console.log(action.payload.title)
            return { ...state, allbids: action.payload }

        default:
            return state;
    }
}

export default getAllBids;