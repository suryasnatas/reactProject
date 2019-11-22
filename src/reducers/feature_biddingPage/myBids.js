import { HANDLE_NEXT, HANDLE_RESET, HANDLE_PREVIOUS, TOGGLE_MODAL, YOUR_BID, UPDATE_BIDDING_LIST } from "../../actions/constants";

const initialState = {
    begin: 0,
    end: 9,
    page: 1,
    flagNext: true,
    visible: true,
    title: "My title",
    modalIsopen: false,
    basePrice: "",
    index: 0,
    location: "",
    posts: [],
    recommendations: [
        { key: '0', title: 'Building temporary pedestrain walkway', ends: '02/07/19', PostedBy: 'Openreach UK', location: 'Shefield and Lincs' },
        { key: '1', title: 'Excavation work in Adestral Park', ends: '02/07/19', PostedBy: 'Vodafone', location: 'Manchester' },
        { key: '2', title: 'Installation of telecom duct infrastructure', ends: '02/07/19', PostedBy: 'Vodafone', location: 'Shefield and Lincs' },
        { key: '3', title: 'Excavation work in Adestral Park', ends: '02/07/19', PostedBy: 'Vodafone', location: 'Manchester' },
        { key: '4', title: 'Fiber expansion in Derby', ends: '02/07/19', PostedBy: 'Openreach', location: 'Shefield and Lincs' },
        { key: '5', title: 'Excavation work in Adestral Park', ends: '02/07/19', PostedBy: 'Vodafone', location: 'Manchester' },
    ]
}

const reducer_bid = (state = initialState, action) => {

    switch (action.type) {

        case HANDLE_NEXT:

            var endNumber = state.end;
            var pageNumber = state.page;
            var postLength = state.posts.length;

            if (postLength - endNumber >= 9)
                return { ...state, begin: endNumber, end: endNumber + 9, page: pageNumber + 1 }
            else
                return { ...state, begin: endNumber, end: endNumber + (postLength - endNumber), page: pageNumber + 1 }

        case HANDLE_PREVIOUS:
            var begin = state.begin;
            var page = state.page;

            if (begin >= 9)
                return { ...state, end: begin, begin: begin - 9, page: page - 1 }
            else
                return { ...state, begin: 0, end: 9, page: 1, index: 0 }

        case HANDLE_RESET:
            return { ...state, begin: 0, end: 9, page: 1 }

        case TOGGLE_MODAL:
            return { ...state, modalIsopen: !state.modalIsopen, title: action.title, basePrice: action.basePrice, index: action.index, location: action.location }

        case YOUR_BID:
            state.posts[state.index].yourBid = action.yourBid;

            return {
                ...state, posts: state.posts, modalIsopen: false
            }

        case "TEST":
            return {
                ...state, yourBid: action.yourBid
            }

        case UPDATE_BIDDING_LIST:
            console.log(state.posts);
            return { ...state, posts: action.payload }

        default:
            return state;
    }
}

export default reducer_bid;