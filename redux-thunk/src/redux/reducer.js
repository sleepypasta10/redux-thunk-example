const initialState = {
    users: [],
    loading: false,
    error: null
}

const usersRdc = (state = initialState, action) => {
    // console.log(state);
    switch (action.type) {
        case "FETCH_DATA_REQUEST":
            return {
                ...state,
                loading: true,
                error: null
            };
            case "FETCH_DATA_SUCCESS":
            return {
                ...state,
                loading: false,
                users: action.payload
            };
            case "FETCH_DATA_FAIL":
            return {
                ...state,
                loading: false,
                error: action.payload,
                users: []
            };
        default:
            return state;
    }
}

export default usersRdc;
