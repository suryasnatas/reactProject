const initialState = {
    modalIsopen: false,
    yourBid: 0,
    finalYourBid: "Make Your Bid!",
    bidsToBeAdded: 0,
    num1: 0,
    num2: 0,
    num3: 0,
    num4: 0,
    total: 0,
    workItems: [
        { unicID: "ID79879", workItem: "Wire", quantity: "3", basePrice: "120" },
        { unicID: "ID79879", workItem: "Civil Wiring", quantity: "1", basePrice: "18" },
        { unicID: "ID79879", workItem: "Wire(Under)", quantity: "2", basePrice: "180" },
        { unicID: "ID79879", workItem: "Wire", quantity: "5", basePrice: "50" }
    ],
    projectTitle: '',
    location: '',
    postedBy: '',
    endsBy: '',
    comment: '',
    basePrice: ''
}

const reducer_bidding = (state = initialState, action) => {

    switch (action.type) {

        case "TOGGLE_BIDDING_MODAL":
            return { ...state, modalIsopen: !state.modalIsopen }

        case "NUM_ONE":
            return { ...state, num1: action.payload }

        case "NUM_TWO":
            return { ...state, num2: action.payload }

        case "NUM_THREE":
            return { ...state, num3: action.payload }

        case "NUM_FOUR":
            const { num1, num2, num3 } = state;
            let total = parseInt(num1) * 3 + parseInt(num2) * 1 + parseInt(num3) * 2 + parseInt(action.payload) * 5;
            return { ...state, yourBid: total }

        case "FINAL_BID_PRICE":
            return { ...state, finalYourBid: action.payload, modalIsopen: !state.modalIsopen }

        case "UPDATE_PROJECT_DETAILS":
            return {
                ...state,
                projectTitle: action.payload.projectTitle,
                location: action.payload.location,
                postedBy: action.payload.postedBy,
                endsBy: action.payload.endsBy,
                comment: action.payload.comment,
                basePrice: action.payload.basePrice
            }

        case "LOGOUT":
            return {
                ...state,
                modalIsopen: false,
                yourBid: 0,
                finalYourBid: "Make Your Bid!",
                bidsToBeAdded: 0,
                num1: 0,
                num2: 0,
                num3: 0,
                num4: 0,
                total: 0
            }

        default:
            return state;
    }
}

export default reducer_bidding;