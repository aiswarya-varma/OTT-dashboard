/**
 * Redux reducer
 */

import { GET_DATA, SEARCH_DATA, SET_SEARCHING, RESTORE } from "./utils";

/**
 * Initial state of reducer
 */
const initialState = {
    data: [],
    count: 0,
    isSearching: false,
    old: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                data: [
                    ...state.data, ...action.payload.page["content-items"].content
                ],
                old: state.data,
                count: action.payload.page["total-content-items"],
            };
        case SEARCH_DATA:
            return {
                ...state,
                old: state.data,
                data: action.payload,
            };
        case SET_SEARCHING: return { ...state, searching: action.payload }
        case RESTORE: return { ...state, data: state.old }
        default: return state;
    }
};


export default reducer;