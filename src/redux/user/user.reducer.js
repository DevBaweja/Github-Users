import UserActionTypes from './user.types';

const INITIAL_STATE = {
    loading: false,
    query: '',
    currentUser: {},
    allUsers: [],
    error: null,
};
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_QUERY:
            return {
                ...state,
                loading: false,
                query: action.payload,
            };
        case UserActionTypes.SEARCH_USERS_START:
            return { ...state, loading: true, allUsers: [], error: null };
        case UserActionTypes.SEARCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                allUsers: action.payload,
                error: null,
            };
        case UserActionTypes.SEARCH_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                allUsers: [],
                error: action.payload,
            };
        case UserActionTypes.CLEAR_USERS:
            return { ...state, loading: false, allUsers: [], error: null };
        case UserActionTypes.SIGN_IN_START:
            return { ...state, loading: true, error: null };
        case UserActionTypes.SIGN_OUT_START:
            return { ...state, loading: true, error: null };
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                loading: false,
                currentUser: action.payload,
                error: null,
            };
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                loading: false,
                currentUser: {},
                error: null,
            };
        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
            return {
                ...state,
                currentUser: {},
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
